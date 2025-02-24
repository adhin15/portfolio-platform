
import { NextRequest, NextResponse } from "next/server";

const url = process.env.GEMINI_URL;


const prompting = async (payload:any) => {
  const fullUrl = `${url}/gemini-1.5-flash:generateContent?key=${process.env.API_KEY}`;
  try {
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(payload)
    });
    const responseData = await response.json();
    return Promise.resolve(responseData);
  } catch (err) {
    return Promise.resolve(err)
  }
};

export async function POST(request:NextRequest) {
  let response;

  const requestData = await request.json();
  const payload = {
    contents:[{
      parts:[{
        "text": `
        Generate a color palette of 6 colors inspired by the keyword [${requestData?.text}]. 
        Ensure the contrast between the background (first color) and font (last color) is strong enough for readability, 
        but not overly harsh. For example, if the background is light, the font color should be dark enough to stand out 
        clearly but not pure black—consider a dark gray or deep color for balance. The 4 colors in between should complement the background and font, 
        creating a harmonious and aesthetically pleasing palette that reflects the vibe of [${requestData?.text}]. Also for reference, the third color should be for accent color, 
        so you can put something that stand out, and the fifth color is for secondary accent, you can put something standout as well.
        Ensure the palette maintains smooth transitions, with a balance between warm and cool tones. 
        Please give me only 6 hex color values in the format: ['#xxx', '#xxx', '#xxx', '#xxx', '#xxx', '#xxx'] with no extra code or markdown syntax`
      }]
    }]
  }

  await prompting(payload).then((val)=>{
    console.log('log BE',val)
    response = val?.candidates?.[0]?.content?.parts?.[0]?.text;
  })
    return NextResponse.json(response, { status: 200 });
}