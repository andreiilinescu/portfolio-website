import os
import json

def read_shader_files(shader_dir='.'):
    """Read all GLSL shader files in the directory and return them as a dictionary."""
    shader_dict = {}
    
    # Walk through all files in the directory
    for root, dirs, files in os.walk(shader_dir):
        for file in files:
            if file.endswith(('.glsl', '.vert', '.frag')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r') as shader_file:
                        # Read the content and store it with the filename as key
                        shader_content = shader_file.read()
                        shader_dict[file] = shader_content
                except Exception as e:
                    print(f"Error reading {file}: {str(e)}")

    return shader_dict

def save_to_json(shader_dict, output_file='shaders.json'):
    """Save the shader dictionary to a JSON file."""
    try:
        with open(output_file, 'w') as json_file:
            json.dump(shader_dict, json_file, indent=2)
        print(f"Successfully saved shaders to {output_file}")
    except Exception as e:
        print(f"Error saving JSON file: {str(e)}")

def main():
    # Get the directory of the current script
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Read all shader files
    shader_dict = read_shader_files(current_dir)
    
    if shader_dict:
        # Save to JSON file
        save_to_json(shader_dict, output_file=os.path.join(current_dir, 'shaders.json'))
    else:
        print("No shader files found in the directory.")

if __name__ == "__main__":
    main()