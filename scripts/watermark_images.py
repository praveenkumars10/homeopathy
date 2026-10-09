import os
import subprocess
from PIL import Image, ImageDraw, ImageFont

def apply_single_watermark():
    image_dir = "public/images/testimonials"
    files = [
        'case1-finger-after.jpg', 'case1-finger-before.jpg',
        'case2-warts-after.jpg', 'case2-warts-before.jpg',
        'case3-foot-ulcer-after.jpg', 'case3-foot-ulcer-before.jpg',
        'case4-arm-eczema-after.jpg', 'case4-arm-eczema-before.jpg',
        'case5-thumb-after.jpg', 'case5-thumb-before.jpg',
        'case6-knee-after.jpg', 'case6-knee-before-1.jpg', 'case6-knee-before-2.jpg'
    ]
    
    font_path = "C:/Windows/Fonts/segoeuib.ttf"
    
    for filename in files:
        file_path = os.path.join(image_dir, filename)
        
        # Always fetch fresh clean original from git
        clean_bytes = subprocess.check_output(['git', 'show', f'fc40aca:public/images/testimonials/{filename}'])
        with open(file_path, 'wb') as f:
            f.write(clean_bytes)
            
        img = Image.open(file_path).convert("RGBA")
        width, height = img.size
        
        # Single watermark overlay
        overlay = Image.new("RGBA", (width, height), (255, 255, 255, 0))
        draw = ImageDraw.Draw(overlay)
        
        # Font size proportional to image dimensions
        font_size = int(min(width, height) * 0.13)
        font = ImageFont.truetype(font_path, font_size)
        
        watermark_text = "ALLEN SHA"
        bbox = draw.textbbox((0, 0), watermark_text, font=font)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        
        cx = (width - tw) // 2
        cy = (height - th) // 2
        
        # Single Center Watermark with prominent dark outline for 100% contrast
        text_img = Image.new("RGBA", (width, height), (255, 255, 255, 0))
        t_draw = ImageDraw.Draw(text_img)
        
        # Crisp outline around text
        for ox in range(-3, 4):
            for oy in range(-3, 4):
                if ox != 0 or oy != 0:
                    t_draw.text((cx + ox, cy + oy), watermark_text, font=font, fill=(0, 0, 0, 120))
        
        # Crisp semi-transparent white fill
        t_draw.text((cx, cy), watermark_text, font=font, fill=(255, 255, 255, 190))
        
        # Rotate -25 deg around center
        rotated_text = text_img.rotate(-25, resample=Image.Resampling.BICUBIC, center=(width//2, height//2))
        overlay.alpha_composite(rotated_text)
        
        # Composite overlay with original image
        final_img = Image.alpha_composite(img, overlay).convert("RGB")
        final_img.save(file_path, "JPEG", quality=95, optimize=True)
        print(f"Applied high-contrast single watermark to: {file_path}")

if __name__ == "__main__":
    apply_single_watermark()
