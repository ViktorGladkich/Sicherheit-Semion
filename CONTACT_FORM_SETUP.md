# 📧 Contact Form Setup with Web3Forms

## Overview

The contact form uses **Web3Forms** - a free service that sends form submissions directly to your Gmail (or any email).

---

## 🚀 Setup Instructions

### Step 1: Get Your Access Key

1. Go to: **https://web3forms.com/**
2. Click **"Get Started for Free"**
3. Enter the **Gmail address** where you want to receive form submissions
4. Click **"Create Access Key"**
5. **Copy the Access Key** (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Update the Code

Open the file: `src/components/contact/ContactForm.tsx`

Find line **~131** and replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key:

```typescript
// BEFORE
access_key: "YOUR_WEB3FORMS_ACCESS_KEY",

// AFTER
access_key: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // Your actual key
```

### Step 3: Rebuild the Project

```bash
npm run build
```

### Step 4: Deploy

Upload the new `dist/` folder to your IONOS hosting.

---

## ✅ Testing

1. Open your website
2. Go to the Contact section
3. Fill out the form with test data
4. Submit
5. Check your Gmail inbox (and spam folder)

---

## 🎯 Features

✅ **Free** - No credit card required
✅ **Unlimited submissions** on free plan
✅ **Spam protection** built-in
✅ **Email notifications** to Gmail
✅ **No backend required** - works on static hosting
✅ **GDPR compliant**

---

## 📝 What the Client Will Receive

Each form submission will arrive as an email with:

- **Subject**: "Neue Kontaktanfrage von [First Name] [Last Name]"
- **Name**: Full name of the sender
- **Email**: Sender's email address
- **Phone**: Phone number (or "Nicht angegeben" if empty)
- **Message**: The message content

---

## 🔧 Advanced Configuration (Optional)

### Custom Email Template

You can customize the email template in Web3Forms dashboard:

1. Log in to https://web3forms.com/
2. Go to your form settings
3. Customize the email template

### Add Auto-Reply

Enable auto-reply to send a confirmation email to customers:

1. In Web3Forms dashboard
2. Enable "Auto Reply"
3. Customize the message

### Webhook Integration

Connect to other services (Slack, Discord, etc.):

1. In Web3Forms dashboard
2. Add webhook URL
3. Configure integration

---

## 🐛 Troubleshooting

### Problem: Not receiving emails

**Solutions:**

- Check Gmail spam folder
- Verify the access key is correct
- Check Web3Forms dashboard for submission logs
- Ensure you verified your email with Web3Forms

### Problem: Form shows error message

**Solutions:**

- Check browser console for errors
- Verify internet connection
- Check if access key is properly set
- Try submitting again after a few minutes

### Problem: Access key not working

**Solutions:**

- Make sure you copied the entire key
- No extra spaces before/after the key
- Key should be in quotes: `"your-key-here"`
- Verify email was confirmed in Web3Forms

---

## 📊 Monitoring

View all form submissions in the Web3Forms dashboard:

- https://web3forms.com/dashboard
- See submission history
- Download as CSV
- View analytics

---

## 💡 Alternative: Use Environment Variable (Recommended)

For better security, use an environment variable:

1. Create `.env` file in project root:

```env
VITE_WEB3FORMS_KEY=your-actual-key-here
```

2. Update `ContactForm.tsx`:

```typescript
access_key: import.meta.env.VITE_WEB3FORMS_KEY,
```

3. Add `.env` to `.gitignore` (already done)

---

## 📞 Support

- **Web3Forms Docs**: https://docs.web3forms.com/
- **Support**: support@web3forms.com
- **Status**: https://status.web3forms.com/

---

## ✅ Setup Checklist

- [ ] Created Web3Forms account
- [ ] Got access key
- [ ] Updated `ContactForm.tsx` with access key
- [ ] Rebuilt project: `npm run build`
- [ ] Deployed to IONOS
- [ ] Tested form submission
- [ ] Verified email delivery
- [ ] Checked spam folder

---

**That's it! Your contact form is ready to receive submissions via Gmail.** 🎉
