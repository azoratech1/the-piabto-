import nodemailer from "nodemailer";

const transporter =
  nodemailer.createTransport({

    service: "gmail",

    auth: {

      user: process.env.EMAIL_USER,

      pass: process.env.EMAIL_PASS,

    },

  });

export const sendEnquiryEmails =
  async ({
    name,
    email,
    mobile,
    interestedType,
    interestedItem,
  }) => {

    try {

      console.log("EMAIL USER:", process.env.EMAIL_USER);

      console.log("EMAIL PASS:", process.env.EMAIL_PASS);

      /* =========================
         USER EMAIL
      ========================= */

      const userHtml = `
        <h2>
          Thank You ${name}
        </h2>

        <p>
          We received your enquiry for
          ${interestedItem?.title}
        </p>
      `;

      /* =========================
         ADMIN EMAIL
      ========================= */

      const adminHtml = `
        <h2>
          New Enquiry Received
        </h2>

        <p>
          Name: ${name}
        </p>

        <p>
          Email: ${email}
        </p>

        <p>
          Mobile: ${mobile}
        </p>

        <p>
          Interested Type:
          ${interestedType}
        </p>
      `;

      // USER EMAIL
      await transporter.sendMail({

        from: `"The Piabto" <${process.env.EMAIL_USER}>`,

        to: email,

        subject:
          "Thank You For Your Enquiry",

        html: userHtml,
      });

      console.log("USER EMAIL SENT");

      // ADMIN EMAIL
      await transporter.sendMail({

        from: `"The Piabto" <${process.env.EMAIL_USER}>`,

        to: process.env.ADMIN_EMAIL,

        subject:
          "New Enquiry Received",

        html: adminHtml,
      });

      console.log("ADMIN EMAIL SENT");

    } catch (error) {

      console.log("EMAIL ERROR:", error);

      throw error;
    }
  };