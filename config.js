// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Avani",

    // The title that appears in the browser tab
    // You can use emojis! 💜💜💜 💞 💕
    pageTitle: "Will You Be My Valentine Babe? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💜', '💜', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yea",                                             // Text for "Yes" button
            noBtn: "hell no",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you babe 💜"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This muchh!",                                   // Text before the percentage
            nextBtn: "Next 💜"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine this year baby? 🌹", // The big question!
            yesBtn: "Hell Yeah",                                             // Text for "Yes" button
            noBtn: "mmm Nah"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Waaaaa u love me that much?? No Wayy🥰🚀💝",  // Shows when they go past 5000%
        high: "Damn really??! Take that Suhana🚀💝",              // Shows when they go past 1000%
        normal: "Awwwww 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "YAYYYYYY! 🎉💝💖💝💓",
        message: "Imma wait so i can give u the biggest kiss ever",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://occoco.etacloud.org/api/v1/download?sig=KDWrsp2UoA0GNzbUT6s8MmtG8Lngh4zf89WFvIggkcLl5hUJ6749UoF%2BQlJhichrWUdPRme71exMG9wsyyrf%2BMNJu7FGBFpiTZJC%2FgV3ydgCGP0QsGQ0lgMGwUbGHrbPKoXInCT7nuY7H7ZcV%2BMriIigcGeo%2BGlzsTa%2F3OoVIU5tj4A0F65%2BdFLPEVT0%2FlMzHRklUFzobfnY%2Fn3RZUPqAzC39PC5QgbqOc4afmwfJDkOFns4lLqxaTHvukEBe984pz%2FFrhQQUnlMT%2BZvxxFvGMvUTRupboo6StSWeUVBSbgug96z29btfi8X6nJSsbXXtEV86%2BcaEFg9wRGUB5dzXQ%3D%3D&s=3&v=izGwDsrQ1eQ&f=mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
