#define PI 3.1415926538

layout(location = 0) uniform float iTime;
layout(location = 1) uniform vec2 iResolution;
layout(location = 3) uniform float dampener;

layout(location = 0) out vec4 fragColor;

layout(location = 2) uniform sampler2D iChannel0;

void main()
{
  float piTime = iTime * PI * 2;
  
  vec2 texCoord = gl_FragCoord.xy / iResolution.xy;
  float maxMag = 0.4;
  float minMag = 0.3;
  float numRings = 6.0;
  float ringVel = 4.0;
  float numPeakShifts = 8.0;
  float peakShiftVel = -3.0;

  float unitX = (texCoord.x - 0.5) * 2;
  float unitY = (texCoord.y - 0.5) * 2;
  float dist = distance(vec2(0, 0), vec2(unitX, unitY));
  float theta = atan(unitY, unitX) + PI; // add PI for atan2 values -PI to PI
  float thisMag = (sin(theta * numRings - piTime * ringVel) + 1) * 0.5 * (cos(theta * numPeakShifts - piTime * peakShiftVel) + 1) * 0.5 * (maxMag - minMag) + minMag;

  float unitSrcDist = dist - dist * thisMag;
  float unitSrcX = cos(theta) * unitSrcDist;
  float unitSrcY = sin(theta) * unitSrcDist;
  float texSrcX = unitSrcX * 0.5 + 0.5;
  float texSrcY = unitSrcY * 0.5 + 0.5;  
  fragColor = texture(iChannel0, vec2(texSrcX, texSrcY));
  
  // fragColor = vec4((sin(theta*6)+1)*0.5, 0.0, 0.0, 1.0);
}
