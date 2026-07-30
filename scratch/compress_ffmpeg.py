import os
import subprocess

imports_dir = os.path.abspath("src/imports")

# 1. Compress IMG_8893.gif (9.49 MB) using ffmpeg to webp
gif_path = os.path.join(imports_dir, "IMG_8893.gif")
webp_gif_path = os.path.join(imports_dir, "IMG_8893.webp")

print(f"Original GIF size: {os.path.getsize(gif_path) / 1024 / 1024:.2f} MB")

cmd1 = [
    "ffmpeg", "-y", "-i", gif_path,
    "-vcodec", "libwebp", "-filter:v", "fps=15,scale=800:-1:flags=lanczos",
    "-lossless", "0", "-compression_level", "6", "-q:v", "65",
    "-loop", "0", webp_gif_path
]

subprocess.run(cmd1, check=True)
print(f"Compressed WebP size: {os.path.getsize(webp_gif_path) / 1024 / 1024:.2f} MB")

# 2. Compress heavy PNGs using ffmpeg to WebP
png_files = [
    "5e245fe0-c484-4a1c-aeb0-e2fc68a39546.png",
    "a8173b17-479b-406d-b280-82d58df2142a.png"
]

for png_name in png_files:
    png_path = os.path.join(imports_dir, png_name)
    webp_name = png_name.replace(".png", ".webp")
    webp_path = os.path.join(imports_dir, webp_name)
    
    if os.path.exists(png_path):
        orig_size = os.path.getsize(png_path) / 1024 / 1024
        cmd2 = [
            "ffmpeg", "-y", "-i", png_path,
            "-vcodec", "libwebp", "-compression_level", "6", "-q:v", "75",
            webp_path
        ]
        subprocess.run(cmd2, check=True)
        new_size = os.path.getsize(webp_path) / 1024 / 1024
        print(f"Compressed {png_name} ({orig_size:.2f} MB) -> {webp_name} ({new_size:.2f} MB)")
