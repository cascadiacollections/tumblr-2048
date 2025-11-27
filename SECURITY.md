# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of tumblr-2048 seriously. If you discover a security vulnerability, please follow these steps:

1. **Do Not** open a public issue
2. Email the maintainers at security@example.com (replace with actual email)
3. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Response Timeline

- We will acknowledge receipt of your vulnerability report within 48 hours
- We will provide an initial assessment within 5 business days
- We will keep you informed of our progress fixing the vulnerability
- Once fixed, we will publicly disclose the vulnerability (with credit to you, if desired)

## Security Best Practices

When using this project:

- Never commit API keys or secrets to the repository
- Use environment variables for sensitive configuration
- Keep dependencies up to date
- Enable 2FA on your GitHub account
- Review pull requests carefully before merging

## Known Security Considerations

- Firebase API keys in this project are public by design (Firebase's security model relies on security rules, not API key secrecy)
- Tumblr API key is restricted to read-only access

## Updates and Patches

Security updates will be released as soon as possible after a vulnerability is confirmed. We recommend:

- Watch this repository for security announcements
- Keep your fork/deployment updated with the latest version
- Subscribe to GitHub security advisories

Thank you for helping keep tumblr-2048 secure!
