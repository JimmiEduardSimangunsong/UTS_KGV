#version 330

out vec4 fColor;
in vec3 color;

void main()
{
	fColor = vec4(color, 1.0f);
}
