import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const allowCors = fn => async (req, res) => {
    const allowedOrigins = ['https://www.ghentfestive500.be', 'https://ghentfestive500.be'];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
        res.setHeader('Access-Control-Allow-Origin', 'null');
    }

    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-vercel-protection-bypass'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    return await fn(req, res);
}

const handler = async (req, res) => {
    try {

        let total = 0;

        // Use autopagination but filter for paid status in the loop
        for await (const session of stripe.checkout.sessions.list({
            payment_link: process.env.STRIPE_PAYMENT_LINK_ID,
            status: 'complete',
            limit: 100,
        })) {
            if (session.payment_status === 'paid') {
                total += session.amount_total;
            }
        }


        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            success: true,
            total: (total / 100).toFixed(2),
            currency: 'EUR'
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

export default allowCors(handler);
