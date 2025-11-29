import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { name, email, mobile, vehicle, chassis } = await req.json();

    const data = await resend.emails.send({
      from: "Insurance Quote <onboarding@resend.dev>",
      to: " rvinsurance07@gmail.com",
      subject: "New Insurance Lead",
      html: `
        <h2>New Lead Received 🚗</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Vehicle:</strong> ${vehicle}</p>
        <p><strong>Chassis:</strong> ${chassis}</p>
      `,
//       html: `
//   <div style="font-family: Arial, sans-serif; background: #f4f7fa; padding: 20px;">
//     <div style="
//       max-width: 600px;
//       margin: auto;
//       background: white;
//       border-radius: 12px;
//       overflow: hidden;
//       box-shadow: 0 4px 15px rgba(0,0,0,0.12);
//     ">

//       <!-- Header -->
//       <div style="background: linear-gradient(90deg,#0ea5e9,#2563eb); padding: 25px; text-align:center; color:white;">
        
//         <!-- ✅ Company Logo -->
//         <img src="https://yourdomain.com/logo.png"
//           alt="RV Insurance"
//           style="width:120px; margin-bottom:10px; border-radius:6px;"
//         />

//         <h1 style="margin:0; font-size:22px;">🚗 New Insurance Lead Received</h1>
//         <p style="margin:0; font-size:14px;">A potential customer just submitted their details</p>
//       </div>

//       <!-- Body -->
//       <div style="padding: 25px;">
//         <h2 style="color:#2563eb; font-size:20px; margin-bottom:10px; text-align:center;">Lead Information</h2>

//         <table style="width:100%; border-collapse: collapse; font-size:15px;">
//           <tr>
//             <td style="padding:8px; font-weight:bold; color:#333;">👤 Name:</td>
//             <td style="padding:8px; background:#f8fafc; border-radius:6px;">${name}</td>
//           </tr>
//           <tr>
//             <td style="padding:8px; font-weight:bold; color:#333;">📧 Email:</td>
//             <td style="padding:8px; background:#f8fafc; border-radius:6px;">${email}</td>
//           </tr>
//           <tr>
//             <td style="padding:8px; font-weight:bold; color:#333;">📱 Mobile:</td>
//             <td style="padding:8px; background:#f8fafc; border-radius:6px;">${mobile}</td>
//           </tr>
//           <tr>
//             <td style="padding:8px; font-weight:bold; color:#333;">🚘 Vehicle:</td>
//             <td style="padding:8px; background:#f8fafc; border-radius:6px;">${vehicle}</td>
//           </tr>
//           <tr>
//             <td style="padding:8px; font-weight:bold; color:#333;">🔧 Chassis:</td>
//             <td style="padding:8px; background:#f8fafc; border-radius:6px;">${chassis}</td>
//           </tr>
//         </table>

//         <!-- ✅ Buttons -->
//         <div style="text-align:center; margin-top:25px;">
//           <a href="tel:${mobile}" style="
//             background:#2563eb;
//             padding:12px 24px;
//             color:white;
//             text-decoration:none;
//             border-radius:8px;
//             display:inline-block;
//             font-weight:bold;
//             margin-right:10px;
//           ">
//             📞 Call Client
//           </a>

//           <a href="https://wa.me/${mobile}" style="
//             background:#25D366;
//             padding:12px 24px;
//             color:white;
//             text-decoration:none;
//             border-radius:8px;
//             display:inline-block;
//             font-weight:bold;
//           ">
//             💬 WhatsApp
//           </a>
//         </div>
//       </div>

//       <!-- Footer -->
//       <div style="background:#f1f5f9; padding:15px; text-align:center; font-size:12px; color:#555;">
//         <strong>RV Insurance Services</strong> © ${new Date().getFullYear()} <br/>
//         You received this email because a customer requested an insurance quote.
//       </div>
//     </div>
//   </div>
// `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
