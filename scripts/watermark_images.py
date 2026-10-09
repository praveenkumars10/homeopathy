import os
import glob
from PIL import Image, ImageDraw, ImageFont

def create_watermarked_images():
    image_dir = "public/images/testimonials"
    files = glob.glob(os.path.join(image_dir, "*.jpg"))
    font_path = "C:/Windows/Fonts/segoeuib.ttf"
    
    for file_path in files:
        img = Image.open(file_path).convert("RGBA")
        width, height = img.size
        
        # Create a transparent overlay
        overlay = Image.new("RGBA", (width, height), (255, 255, 255, 0))
        draw = ImageDraw.Draw(overlay)
        
        # Font sizes based on image dimensions
        main_font_size = int(min(width, height) * 0.12)
        grid_font_size = int(min(width, height) * 0.055)
        badge_font_size = int(min(width, height) * 0.035)
        
        main_font = ImageFont.truetype(font_path, main_font_size)
        grid_font = ImageFont.truetype(font_path, grid_font_size)
        badge_font = ImageFont.truetype(font_path, badge_font_size)
        
        # 1. Create a diagonal repeating watermark pattern
        tile_w, tile_h = int(width * 1.5), int(height * 1.5)
        tile_img = Image.new("RGBA", (tile_w, tile_h), (255, 255, 255, 0))
        tile_draw = ImageDraw.Draw(tile_img)
        
        step_x = int(width * 0.35)
        step_y = int(height * 0.22)
        
        for y in range(0, tile_h, step_y):
            for x in range(0, tile_w, step_x):
                # offset alternating rows
                offset_x = (step_x // 2) if (y // step_y) % 2 == 1 else 0
                pos_x = x + offset_x
                pos_y = y
                
                # Shadow
                tile_draw.text((pos_x + 1, pos_y + 1), "Allen Sha", font=grid_font, fill=(0, 0, 0, 70))
                # Text
                tile_draw.text((pos_x, pos_y), "Allen Sha", font=grid_font, fill=(255, 255, 255, 110))
        
        # Rotate tile
        rotated_tile = tile_img.rotate(28, resample=Image.Resampling.BICUBIC, expand=False)
        crop_x = (tile_w - width) // 2
        crop_y = (tile_h - height) // 2
        cropped_tile = rotated_tile.crop((crop_x, crop_y, crop_x + width, crop_y + height))
        
        # Composite rotated grid onto overlay
        overlay.alpha_composite(cropped_tile)
        
        # 2. Add Center Prominent Watermark
        center_overlay = Image.new("RGBA", (width, height), (255, 255, 255, 0))
        c_draw = ImageDraw.Draw(center_overlay)
        center_text = "ALLEN SHA"
        bbox = c_draw.textbbox((0, 0), center_text, font=main_font)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        cx = (width - tw) // 2
        cy = (height - th) // 2
        
        # Dark outline / shadow for center text
        for dx, dy in [(-2,0), (2,0), (0,-2), (0,2), (-2,-2), (2,2), (-2,2), (2,-2), (0,3), (3,3)]:
            c_draw.text((cx + dx, cy + dy), center_text, font=main_font, fill=(0, 0, 0, 90))
        c_draw.text((cx, cy), center_text, font=main_font, fill=(255, 255, 255, 160))
        
        # Rotate center text slightly (-20 deg)
        rot_center = center_overlay.rotate(-20, resample=Image.Resampling.BICUBIC, center=(width//2, height//2))
        overlay.alpha_composite(rot_center)
        
        # 3. Add Bottom Watermark Bar / Badge (Guaranteed visibility if downloaded)
        b_draw = ImageDraw.Draw(overlay)
        badge_text = "ALLEN SHA • CLINICAL CASE DOCUMENTATION"
        b_bbox = b_draw.textbbox((0, 0), badge_text, font=badge_font)
        bw = b_bbox[2] - b_bbox[0]
        bh = b_bbox[3] - b_bbox[1]
        
        pad_x, pad_y = 16, 8
        bar_w = bw + (pad_x * 2)
        bar_h = bh + (pad_y * 2)
        bar_x = (width - bar_w) // 2
        bar_y = height - bar_h - 18
        
        # Rounded background box
        b_draw.rounded_rectangle(
            [bar_x, bar_y, bar_x + bar_w, bar_y + bar_h],
            radius=8,
            fill=(20, 50, 40, 160),
            outline=(255, 255, 255, 120),
            width=1
        )
        b_draw.text((bar_x + pad_x, bar_y + pad_y), badge_text, font=badge_font, fill=(255, 255, 255, 220))
        
        # Composite overlay with original image
        final_img = Image.alpha_composite(img, overlay).convert("RGB")
        
        # Save back to file
        final_img.save(file_path, "JPEG", quality=92, optimize=True)
        print(f"Watermarked: {file_path}")

if __name__ == "__main__":
    create_watermarked_images()
