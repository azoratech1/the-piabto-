import nodemailer from "nodemailer";

export const sendEnquiryEmails =
  async ({
    name,
    email,
    mobile,
    interestedType,
    interestedItem,
  }) => {

    try {

      console.log(
        "\n========== EMAIL DEBUG =========="
      );

      console.log(
        "EMAIL USER:",
        process.env.EMAIL_USER
      );

      console.log(
        "EMAIL PASS:",
        process.env.EMAIL_PASS
      );

      console.log(
        "EMAIL PASS TYPE:",
        typeof process.env.EMAIL_PASS
      );

      console.log(
        "EMAIL PASS LENGTH:",
        process.env.EMAIL_PASS?.length
      );

      console.log(
        "EMAIL PASS JSON:",
        JSON.stringify(
          process.env.EMAIL_PASS
        )
      );

      console.log(
        "ADMIN EMAIL:",
        process.env.ADMIN_EMAIL
      );

      /* =========================
         CREATE TRANSPORTER
      ========================= */

      const transporter =
        nodemailer.createTransport({

          host: "smtp.gmail.com",

          port: 465,

          secure: true,

          auth: {

            user:
              String(
                process.env.EMAIL_USER
              ).trim(),

            pass:
              String(
                process.env.EMAIL_PASS
              ).trim(),
          },
        });

      console.log(
        "\n========== TRANSPORTER =========="
      );

      console.log(
        transporter.options.auth
      );

      /* =========================
         VERIFY SMTP
      ========================= */

      await transporter.verify();

      console.log(
        "SMTP VERIFIED SUCCESSFULLY"
      );

      /* =========================
         USER EMAIL TEMPLATE
      ========================= */

      const userHtml = `
        <div style="
          font-family:Arial;
          padding:30px;
          background:#f7f3ed;
        ">

          <div style="
            max-width:600px;
            margin:auto;
            background:white;
            border-radius:14px;
            overflow:hidden;
            border:1px solid #e7dccf;
          ">

            <div style="
              background:#062d21;
              padding:25px;
              text-align:center;
            ">

              <h1 style="
                color:white;
                margin:0;
              ">
                The Piabto
              </h1>

            </div>

            <div style="padding:30px;">

              <h2>
                Thank You ${name}
              </h2>

              <p>
                We received your enquiry
                successfully.
              </p>

              <p>
                Interested In:
                <strong>
                  ${
                    interestedItem?.title
                  }
                </strong>
              </p>

              <p>
                Our team will contact
                you shortly.
              </p>

            </div>

          </div>

        </div>
      `;

      /* =========================
         ADMIN EMAIL TEMPLATE
      ========================= */

      const adminHtml = `
        <div style="
          font-family:Arial;
          padding:30px;
          background:#f7f3ed;
        ">

          <div style="
            max-width:600px;
            margin:auto;
            background:white;
            border-radius:14px;
            padding:30px;
            border:1px solid #e7dccf;
          ">

            <h2>
              New Enquiry Received
            </h2>

            <table style="
              width:100%;
              border-collapse:collapse;
            ">

              <tr>
                <td>
                  <strong>Name</strong>
                </td>

                <td>${name}</td>
              </tr>

              <tr>
                <td>
                  <strong>Email</strong>
                </td>

                <td>${email}</td>
              </tr>

              <tr>
                <td>
                  <strong>Mobile</strong>
                </td>

                <td>${mobile}</td>
              </tr>

              <tr>
                <td>
                  <strong>Interested Type</strong>
                </td>

                <td>
                  ${interestedType}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Interested In</strong>
                </td>

                <td>
                  ${
                    interestedItem?.title
                  }
                </td>
              </tr>

            </table>

          </div>

        </div>
      `;

      /* =========================
         SEND USER EMAIL
      ========================= */

      console.log(
        "\nSENDING USER EMAIL..."
      );

      await transporter.sendMail({

        from:
          `"The Piabto" <${process.env.EMAIL_USER}>`,

        to: email,

        subject:
          "Thank You For Your Enquiry",

        html: userHtml,
      });

      console.log(
        "USER EMAIL SENT SUCCESSFULLY"
      );

      /* =========================
         SEND ADMIN EMAIL
      ========================= */

      console.log(
        "\nSENDING ADMIN EMAIL..."
      );

      await transporter.sendMail({

        from:
          `"The Piabto" <${process.env.EMAIL_USER}>`,

        to:
          process.env.ADMIN_EMAIL,

        subject:
          "New Enquiry Received",

        html: adminHtml,
      });

      console.log(
        "ADMIN EMAIL SENT SUCCESSFULLY"
      );

      console.log(
        "\n========== EMAIL SUCCESS =========="
      );

    } catch (error) {

      console.log(
        "\n========== EMAIL ERROR =========="
      );

      console.log(
        "ERROR MESSAGE:",
        error.message
      );

      console.log(
        "ERROR CODE:",
        error.code
      );

      console.log(
        "FULL ERROR:",
        error
      );

      console.log(
        "STACK:",
        error.stack
      );

      console.log(
        "========== EMAIL ERROR END ==========\n"
      );

      throw error;
    }
  };