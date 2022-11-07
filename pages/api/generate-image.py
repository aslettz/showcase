from http.server import BaseHTTPRequestHandler
from datetime import datetime
import numpy as np
from PIL import Image
import datetime
import random


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','image/png')
        self.end_headers()

        random.seed('RED')
        r = random.randint(0, 255)
        random.seed('GREEN')
        g = random.randint(0, 255)
        random.seed('BLUE')
        b = random.randint(0, 255)
        im = Image.open('white-logo.png')
        im = im.convert('RGBA')

        data = np.array(im)  # "data" is a height x width x 4 numpy array
        red, green, blue, alpha = data.T  # Temporarily unpack the bands for readability

        # Replace white with red... (leaves alpha values alone...)
        white_areas = (red == 255) & (blue == 255) & (green == 255)
        data[..., :-1][white_areas.T] = (r, g, b)  # Transpose back needed

        im2 = Image.fromarray(data)
        self.wfile.write(im2)

        return