      function goTo(id) {
        document
          .querySelectorAll(".page")
          .forEach((p) => p.classList.remove("active"));
        document.getElementById(id).classList.add("active");
        document.querySelectorAll(".nav-link").forEach((btn) => {
          btn.classList.toggle(
            "active",
            btn.getAttribute("onclick").includes("'" + id + "'"),
          );
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
        const navLinks = document.getElementById("nav-links");
        navLinks.classList.remove("open");
      }

      function toggleMenu() {
        document.getElementById("nav-links").classList.toggle("open");
      }

      function showToast(msg) {
        const t = document.getElementById("toast");
        document.getElementById("toast-msg").textContent = msg;
        t.classList.add("show");
        setTimeout(() => t.classList.remove("show"), 3000);
      }

      function submitForm() {
        const name = document.getElementById("cf-name").value.trim();
        const phone = document.getElementById("cf-phone").value.trim();
        const email = document.getElementById("cf-email").value.trim();
        const type = document.getElementById("cf-type").value.trim();
        const date = document.getElementById("cf-date").value.trim();
        const msg = document.getElementById("cf-msg").value.trim();

        if (!name || !email) {
          showToast("Please fill in your name and email.");
          return;
        }

        const WHATSAPP_NUMBER = "919589687724"; // ← Replace with your WhatsApp number (country code + number, no + or spaces)

        const text =
          `*New Event Enquiry — Patidar Events*\n\n` +
          `👤 *Name:* ${name}\n` +
          `📞 *Phone:* ${phone || "Not provided"}\n` +
          `📧 *Email:* ${email}\n` +
          `🎉 *Event type:* ${type || "Not specified"}\n` +
          `📅 *Expected date:* ${date || "Not specified"}\n` +
          `📝 *Message:*\n${msg || "No additional details."}`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");

        [
          "cf-name",
          "cf-phone",
          "cf-email",
          "cf-type",
          "cf-date",
          "cf-msg",
        ].forEach((id) => {
          document.getElementById(id).value = "";
        });
      }
    