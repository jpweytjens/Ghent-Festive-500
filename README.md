# Ghent Festive 500

<div style="display: flex; align-items: center; justify-content: space-between;">
    <div style="flex: 2;">
        The Rapha Festive 500 is a year-end cycling challenge where participants aim to cycle a minimum of 500 km between Christmas Eve and New Year's Eve. For the third year running, 8 Ghent cycling clubs are collaborating to help cyclists achieve this goal.
    </div>
    <div style="flex: 1; text-align: right;">
        <img src="https://images.squarespace-cdn.com/content/v1/6530437398bac152289a44ce/9c34113d-8603-4935-bb9e-7c6914045687/ghent_festive_500_white.png?format=1500w" alt="Ghent Festive 500 Logo" width="150"/>
    </div>
</div>


### Event Details
- Daily social rides from December 24-31
- Start time: 9:30 AM
- Two route options: 75km and 100km
- Accompanied by road captains
- No-drop policy ensuring comfortable group riding
- Three platoons with varying speeds to accommodate all riders

### Supporting Sportaround
Each year, the [Ghent Festive 500](https://www.ghentfestive500.be/) supports a charity. This year's beneficiary is Sportaround, an organization making sports accessible to everyone. Participants can purchase stamp cards for a voluntary contribution, with 100% of proceeds going to Sportaround.

## Repository Contents

This repository contains the code for tracking and displaying donations made to Sportaround during the [Ghent Festive 500](https://www.ghentfestive500.be/) event.

### File Structure
```
├── api/
│   └── payment-total.js   
├── squarespace_code_blocks/
│   └── countdown_with_donation.html
└── README.md
```

## Technical Setup

### Prerequisites
- Node.js 14+
- Stripe account with API keys
- Vercel account (for serverless function deployment)
- Squarespace website


### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ghent-festive-500.git
cd ghent-festive-500
```

2. Install dependencies:
```bash
npm install stripe
```

3. Deploy the API function to Vercel:
```bash
vercel
```
 Add your STRIPE KEYS as environment variables in the Vercel dashboard.

4. Squarespace Integration

Add the html code in `squarespace_code_blocks/` as a code block on your squarespace website.