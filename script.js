// Expanded questions for demo (same as before)
const TEST_QUESTIONS = {
    Math: {
        Algebra: [
            {q: 'Solve for x: 2x + 4 = 14', options: ['4', '5', '6', '7'], answer: 2},
            {q: 'Solve for x: 5x-7 = 18', options: ['2', '3', '5', '7'], answer:3},
            {q: 'What is the quadratic formula?', options: [
                'x = (-b±√(b²-4ac))/2a',
                'x = (b±√(b²+4ac))/2a',
                'x = (a±√(a²-4bc))/2b',
                'x = (b±√(b²-2ac))/a'
            ], answer: 0},
            
        ],
        Geometry: [
            {q: 'How many degrees are in a triangle?', options: ['90', '180', '360', '270'], answer: 1},
            {q: 'What is the area of a circle with radius r?', options: [
                'πr²', '2πr', 'πd', 'πr'
            ], answer: 0}
        ],
        Trigonometry: [
            {q: 'sin(90°) equals:', options: ['0', '1', '0.5', 'undefined'], answer: 1}
        ],
            Probability:[
                {9: 'A coin was flipped.What is the probability of getting heads', options:['0.25', '0.5', '1', '0.2'], answer:2},
        ]
    },
    English: {
        Grammar: [
            {q: 'Choose the correct sentence:', options: [
                'She don’t like apples.',
                'She doesn’t like apples.',
                'She don’t likes apples.',
                'She doesn’t likes apples.'
            ], answer: 1},
            {q: 'Which is a preposition?', options: [
                'Quickly', 'Above', 'Running', 'Happiness'
            ], answer: 1}
        ],
        Literature: [
            {q: 'Who wrote "Romeo and Juliet"?', options: [
                'Jane Austen', 'William Shakespeare', 'Charles Dickens', 'Wole Soyinka'
            ], answer: 1}
        ]
    },
    Biology: {
        'Cell Structure': [
            {q: 'Which organelle is known as the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'], answer: 1},
            {q: 'What is the function of ribosomes?', options: [
                'Photosynthesis', 'Protein synthesis', 'Cell division', 'Respiration'
            ], answer: 1}
        ],
        Genetics: [
            {q: 'Who is known as the father of genetics?', options: [
                'Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Isaac Newton'
            ], answer: 1}
        ]
    },
    Physics: {
        Mechanics: [
            {q: 'What is Newton\'s second law?', options: [
                'F=ma', 'E=mc²', 'F=mv', 'V=IR'
            ], answer: 0}
        ],
        'Waves & Sound': [
            {q: 'Sound travels fastest in:', options: [
                'Air', 'Water', 'Steel', 'Vacuum'
            ], answer: 2}
        ]
    },
    Chemistry: {
        'Periodic Table': [
            {q: 'What is the chemical symbol for Iron?', options: ['I', 'Ir', 'Fe', 'In'], answer: 2}
        ],
        'Acids & Bases': [
            {q: 'Which of these is a strong acid?', options: [
                'HCl', 'CH3COOH', 'NH4OH', 'Na2CO3'
            ], answer: 0}
        ]
    },
    Geography: {
        'World Capitals': [
            {q: 'What is the capital of Canada?', options: [
                'Toronto', 'Ottawa', 'Vancouver', 'Montreal'
            ], answer: 1}
        ],
        'Continents': [
            {q: 'Which continent is the largest by area?', options: [
                'Africa', 'Europe', 'Asia', 'North America'
            ], answer: 2}
        ]
    },
    History: {
        'World Wars': [
            {q: 'World War II ended in:', options: [
                '1939', '1945', '1950', '1920'
            ], answer: 1}
        ],
        'Nigerian History': [
            {q: 'Nigeria gained independence in:', options: [
                '1960', '1957', '1970', '1963'
            ], answer: 0}
        ]
    },
    ICT: {
        'Programming': [
            {q: 'HTML stands for:', options: [
                'Hyper Trainer Marking Language',
                'Hyper Text Markup Language',
                'Home Tool Markup Language',
                'Hyper Tool Markup Language'
            ], answer: 1}
        ],
        'Networking': [
            {q: 'What does LAN stand for?', options: [
                'Large Area Network',
                'Local Area Network',
                'Light Area Network',
                'Logical Area Network'
            ], answer: 1}
        ]
    },
    French: {
        'Basics': [
            {q: 'How do you say "Thank you" in French?', options: [
                'Bonjour', 'Merci', 'Au revoir', 'S’il vous plaît'
            ], answer: 1}
        ],
        'Numbers': [
            {q: 'What is "ten" in French?', options: [
                'Dix', 'Neuf', 'Huit', 'Sept'
            ], answer: 0}
        ]
    }
};
const TOPICS = {};
Object.keys(TEST_QUESTIONS).forEach(subject => {
    TOPICS[subject] = Object.keys(TEST_QUESTIONS[subject]);
});
const SHOP_ITEMS = [
    {id: 1, name: 'UPSS School Bag', price: 6500, img: '🧳'},
    {id: 2, name: 'UPSS Tie', price: 1200, img: '👔'},
    {id: 3, name: 'UPSS Exercise Book (1)', price: 300, img: '📒'},
    {id: 4, name: 'Mathematical Set', price: 900, img: '📐'},
    {id: 5, name: 'School Badge', price: 500, img: '🎖️'},
    {id: 6, name: 'UPSS Water Bottle', price: 900, img: '🥤'},
    {id: 7, name: 'UPSS Polo Shirt', price: 3500, img: '👕'},
    {id: 8, name: 'UPSS Socks (Pair)', price: 650, img: '🧦'},
    {id: 9, name: 'UPSS Cap', price: 1800, img: '🧢'},
    {id: 10, name: 'Lab Coat', price: 2200, img: '🥼'}
];
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    // Populate subject select
    const subjectSelect = document.getElementById('subject');
    Object.keys(TOPICS).forEach(subject => {
        let option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });
    // Populate topics when subject changes
    subjectSelect.addEventListener('change', function() {
        const subject = this.value;
        const topicSelect = document.getElementById('topic');
        topicSelect.innerHTML = '<option value="">Select</option>';
        if (TOPICS[subject]) {
            TOPICS[subject].forEach(topic => {
                let option = document.createElement('option');
                option.value = topic;
                option.textContent = topic;
                topicSelect.appendChild(option);
            });
        }
    });
    // Render shop items
    renderShopItems();
    // Update cart summary
    updateCartSummary();
    // Payment method UI update
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', showPaymentForm);
    });
    showPaymentForm();

    // Shipping method UI update
    document.querySelectorAll('input[name="shipping-method"]').forEach(radio => {
        radio.addEventListener('change', showShippingDetails);
    });
    showShippingDetails();
});

function startTest() {
    const subject = document.getElementById('subject').value;
    const topic = document.getElementById('topic').value;
    const testArea = document.getElementById('test-area');
    const questionsForm = document.getElementById('questions-form');
    const submitBtn = document.getElementById('submit-test');
    const testResult = document.getElementById('test-result');
    if (!subject || !topic) {
        alert("Please select a subject and topic.");
        return;
    }
    questionsForm.innerHTML = '';
    testResult.textContent = '';
    submitBtn.style.display = 'none';
    const questions = (TEST_QUESTIONS[subject] && TEST_QUESTIONS[subject][topic]) || [];
    if (questions.length === 0) {
        questionsForm.innerHTML = '<p>No tests available for this topic.</p>';
        testArea.style.display = 'block';
        return;
    }
    questions.forEach((q, idx) => {
        let div = document.createElement('div');
        div.className = 'question-block';
        let qText = document.createElement('p');
        qText.textContent = `${idx + 1}. ${q.q}`;
        div.appendChild(qText);
        q.options.forEach((opt, oidx) => {
            let label = document.createElement('label');
            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q${idx}`;
            radio.value = oidx;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(' ' + opt));
            div.appendChild(label);
            div.appendChild(document.createElement('br'));
        });
        questionsForm.appendChild(div);
    });
    if (questions.length > 0) {
        submitBtn.style.display = 'inline-block';
        submitBtn.onclick = () => submitTest(subject, topic);
    }
    testArea.style.display = 'block';
}
function submitTest(subject, topic) {
    const questions = TEST_QUESTIONS[subject][topic];
    let score = 0;
    questions.forEach((q, idx) => {
        let radios = document.getElementsByName(`q${idx}`);
        radios = Array.from(radios);
        let selected = radios.find(r => r.checked);
        if (selected && parseInt(selected.value) === q.answer) score++;
    });
    const total = questions.length;
    let result = document.getElementById('test-result');
    result.innerHTML = `<strong>Your Score:</strong> ${score} out of ${total}`;
    document.getElementById('submit-test').style.display = 'none';
}
// Shop logic
function renderShopItems() {
    const shopDiv = document.getElementById('shop-items');
    shopDiv.innerHTML = '';
    SHOP_ITEMS.forEach(item => {
        let div = document.createElement('div');
        div.className = 'shop-item';
        div.innerHTML = `
            <div style="font-size:2em;">${item.img}</div>
            <h4>${item.name}</h4>
            <p>₦${item.price.toLocaleString()}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        shopDiv.appendChild(div);
    });
}
function addToCart(id) {
    let found = cart.find(item => item.id === id);
    if (found) found.qty++;
    else cart.push({...SHOP_ITEMS.find(i => i.id === id), qty: 1});
    updateCartSummary();
}
function updateCartSummary() {
    const cartSummary = document.getElementById('cart-summary');
    if (!cartSummary) return;
    if (cart.length === 0) {
        cartSummary.value = 'Cart is empty.';
        return;
    }
    let lines = cart.map(item => `${item.name} (₦${item.price}) x${item.qty} = ₦${item.price * item.qty}`);
    let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    // Add shipping cost if applicable
    if (document.querySelector('input[name="shipping-method"]:checked')?.value === 'door') {
        lines.push('Shipping: ₦2000');
        total += 2000;
    }
    lines.push(`Total: ₦${total}`);
    cartSummary.value = lines.join('\n');
}
function showPaymentForm() {
    const method = document.querySelector('input[name="payment-method"]:checked').value;
    const paymentSection = document.getElementById('payment-section');
    const paypalBtn = document.getElementById('paypal-button-container');
    paypalBtn.style.display = (method === 'paypal') ? 'block' : 'none';
    let html = '';
    switch(method) {
        case 'mastercard':
            html = `
                <p>Pay securely with Mastercard, Visa, Verve or Bank using Paystack.</p>
            `;
            break;
        case 'transfer':
            html = `
                <label for="acc-name">Account Name:</label>
                <input type="text" id="acc-name" placeholder="Your Name">
                <label for="acc-number">Account Number:</label>
                <input type="text" id="acc-number" placeholder="0123456789" maxlength="10">
                <div style="color:#2f2fa2;font-size:0.98em;margin:7px 0 0 0;">
                    <b>Bank:</b> UPSS Bank<br>
                    <b>Account Number:</b> 1234567890
                </div>
            `;
            break;
        case 'paypal':
            html = '<p>Pay securely via PayPal.</p>';
            break;
    }
    paymentSection.innerHTML = html;
    if (method === 'paypal') {
        setupPaypalButton();
    }
}
function showShippingDetails() {
    const method = document.querySelector('input[name="shipping-method"]:checked').value;
    const shippingDiv = document.getElementById('shipping-details');
    let html = '';
    if (method === 'door') {
        html = `
            <label for="ship-name">Recipient Name:</label>
            <input type="text" id="ship-name" placeholder="Full Name" required>
            <label for="ship-phone">Phone Number:</label>
            <input type="text" id="ship-phone" placeholder="080xxxxxxxx" required>
            <label for="ship-address">Delivery Address:</label>
            <textarea id="ship-address" placeholder="Street, Area, City, State" required></textarea>
            <label for="ship-location">Location:</label>
            <select id="ship-location">
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Port Harcourt">Port Harcourt</option>
                <option value="Kano">Kano</option>
                <option value="Other">Other</option>
            </select>
        `;
    }
    shippingDiv.innerHTML = html;
    updateCartSummary();
}
function checkout() {
    if (cart.length === 0) {
        document.getElementById('checkout-message').textContent = 'Your cart is empty!';
        document.getElementById('checkout-message').style.color = 'red';
        return;
    }
    // Validate shipping
    const shipping = document.querySelector('input[name="shipping-method"]:checked').value;
    if (shipping === 'door') {
        const name = document.getElementById('ship-name')?.value.trim();
        const phone = document.getElementById('ship-phone')?.value.trim();
        const addr = document.getElementById('ship-address')?.value.trim();
        const loc = document.getElementById('ship-location')?.value;
        if (!name || !phone || !addr || !loc) {
            document.getElementById('checkout-message').textContent = "Please complete all shipping details.";
            document.getElementById('checkout-message').style.color = 'red';
            return;
        }
    }
    // Payment
    const method = document.querySelector('input[name="payment-method"]:checked').value;
    if (method === 'mastercard') {
        payWithPaystack();
    } else if (method === 'paypal') {
        // PayPal handled by button, nothing to do here
        document.getElementById('checkout-message').textContent = "Click the PayPal button below to complete payment.";
        document.getElementById('checkout-message').style.color = 'blue';
    } else if (method === 'transfer') {
        const name = document.getElementById('acc-name')?.value.trim();
        const acc = document.getElementById('acc-number')?.value.trim();
        if (!name || !/^[0-9]{10}$/.test(acc)) {
            document.getElementById('checkout-message').textContent = 'Please enter valid account details.';
            document.getElementById('checkout-message').style.color = 'red';
            return;
        }
        const total = getCartTotal();
        document.getElementById('checkout-message').textContent = `Please transfer ₦${total} to UPSS Bank, Acc: 1234567890. Your order is pending confirmation.`;
        document.getElementById('checkout-message').style.color = 'green';
        cart = [];
        updateCartSummary();
        showPaymentForm();
    }
}
function getCartTotal() {
    let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    if (document.querySelector('input[name="shipping-method"]:checked')?.value === 'door') {
        total += 2000;
    }
    return total;
}

// PAYSTACK integration (replace with your public key)
function payWithPaystack() {
    const total = getCartTotal();
    const email = prompt("Enter your email for payment receipt:");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('checkout-message').textContent = 'Enter a valid email.';
        document.getElementById('checkout-message').style.color = 'red';
        return;
    }
    var handler = PaystackPop.setup({
        key: 'YOUR_PAYSTACK_PUBLIC_KEY', // Replace with your Paystack public key!
        email: email,
        amount: total * 100, // Amount in kobo
        currency: "NGN",
        callback: function(response){
            document.getElementById('checkout-message').textContent =
                'Payment successful! Transaction ref: ' + response.reference;
            document.getElementById('checkout-message').style.color = 'green';
            cart = [];
            updateCartSummary();
            showPaymentForm();
        },
        onClose: function(){
            document.getElementById('checkout-message').textContent =
                'Payment window closed';
            document.getElementById('checkout-message').style.color = 'red';
        }
    });
    handler.openIframe();
}

// PAYPAL integration (replace with your real client ID)
function setupPaypalButton() {
    // Only set up button once
    if (window.paypalBtnRendered) return;
    window.paypalBtnRendered = true;
    const total = (getCartTotal() / 1400).toFixed(2); // Example conversion to USD (@₦1400/$1)
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: total
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                document.getElementById('checkout-message').textContent =
                    'Payment completed by ' + details.payer.name.given_name;
                document.getElementById('checkout-message').style.color = 'green';
                cart = [];
                updateCartSummary();
                showPaymentForm();
            });
        }
    }).render('#paypal-button-container');
}

// Contact form (simulated)
function sendContact() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const msg = document.getElementById('contact-msg').value.trim();
    if (!name || !email || !msg) {
        document.getElementById('contact-result').textContent = "Please fill all fields.";
        document.getElementById('contact-result').style.color = 'red';
        return;
    }
    document.getElementById('contact-result').textContent = "Message sent! We'll get back to you soon.";
    document.getElementById('contact-result').style.color = 'green';
    document.getElementById('contact-form').reset();
}
function addSubject() {
    const input = document.getElementById('newSubject');
    const value = input.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.textContent = value;
        document.getElementById('subjects-list').appendChild(li);
        input.value = '';
    }
}