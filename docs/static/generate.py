import os

def generate_iframe_tag(filename):
    return f'<include src="{filename}"></include>'
    # return f'<iframe src="{filename}" width="100%" height="500"></iframe>'

def process_html_files(directory):
    for filename in sorted(os.listdir(directory)):
        if filename.endswith(".html"):
            filepath = os.path.join(directory, filename)
            iframe_tag = generate_iframe_tag(filepath)
            print(iframe_tag)

process_html_files("./html")
