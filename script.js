document.addEventListener("DOMContentLoaded", function() {
    // Text-by-text animation for Why Choose Us?
    const animatedText = document.querySelector('.animated-text');
    if (animatedText) {
        const spans = animatedText.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.transitionDelay = `${index * 0.3}s`; // Slightly slower for effect
        });
        setTimeout(() => {
            spans.forEach(span => {
                span.classList.add('visible');
            });
        }, 100);
    }

    // Sticky header scroll effect
    const stickyHeader = document.querySelector('.sticky-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Trigger after scrolling 50px
            stickyHeader.classList.add('scrolled');
        } else {
            stickyHeader.classList.remove('scrolled');
        }
    });
});

function showSamples(category) {
    const sampleContainer = document.getElementById("samples-container");
    sampleContainer.innerHTML = "";

    const videoLinks = {
        documentary: [
            { url: "https://www.youtube.com/embed/35QO-GSDSAc?si=WDyANio5Xv9X1vot", title: "Documentary Video 1" },
            { url: "https://www.youtube.com/embed/94YTLHP82J8?si=kvAJvOQMz0KOGkB7", title: "Documentary Video 2" }
        ],
        gaming: [
            { url: "https://www.youtube.com/embed/rCeEcqkg3TQ", title: "Gaming Video 1" },
            { url: "https://www.youtube.com/embed/JXt-kipkJqc?si=fg-8qnmvQ9SAK0aj", title: "Gaming Video 2" }
        ],
        shortform: [
            { url: "https://www.youtube.com/embed/suz8t-kIuM0?si=ajcjtGqfyPLmKsNA", title: "Short-form Video 1" },
            { url: "https://www.youtube.com/embed/DeyF2F1nmkY?si=HmQVqw7cfSxxHil7", title: "Short-form Video 2" }
        ],
        podcast: [
            { url: "https://www.youtube.com/embed/suz8t-kIuM0?si=ajcjtGqfyPLmKsNA", title: "Podcast Video 1" },
            { url: "https://www.youtube.com/embed/sample8", title: "Podcast Video 2" }
        ],
        others: [
            { url: "https://www.youtube.com/embed/YoSdAcaezt8?si=2PNm1kAbKqXNY-OG", title: "Other Video 1" },
            { url: "https://www.youtube.com/embed/LynEzF1T6-c?si=1kHVPqGcZ5OM_EdQ", title: "Other Video 2" }
        ]
    };

    videoLinks[category].forEach(link => {
        let iframe = document.createElement("iframe");
        iframe.src = link.url;
        iframe.width = "560";
        iframe.height = "315";
        iframe.title = link.title;
        iframe.allowFullscreen = true;
        sampleContainer.appendChild(iframe);
    });
}

function showDesignSamples(category) {
    const sampleContainer = document.getElementById("design-samples-container");
    sampleContainer.innerHTML = "";

    const designLinks = {
        thumbnails: [
            { url: "assets/thumbnails/sample1.png", title: "Thumbnail 1" },
            { url: "assets/thumbnails/sample2.png", title: "Thumbnail 2" },
            { url: "assets/thumbnails/sample3.png", title: "Thumbnail 3" },
            { url: "assets/thumbnails/sample4.png", title: "Thumbnail 4" },
            { url: "assets/thumbnails/sample5.png", title: "Thumbnail 5" },
            { url: "assets/thumbnails/sample6.png", title: "Thumbnail 6" },
            { url: "assets/thumbnails/sample7.png", title: "Thumbnail 7" },
            { url: "assets/thumbnails/sample8.png", title: "Thumbnail 8" },
            { url: "assets/thumbnails/sample9.png", title: "Thumbnail 9" },
            { url: "assets/thumbnails/sample10.png", title: "Thumbnail 10" },
            { url: "assets/thumbnails/sample11.jpg", title: "Thumbnail 11" },
            { url: "assets/thumbnails/sample12.jpg", title: "Thumbnail 12" },
            { url: "assets/thumbnails/sample13.jpg", title: "Thumbnail 13" },
            { url: "assets/thumbnails/sample14.jpg", title: "Thumbnail 14" },
            { url: "assets/thumbnails/sample15.jpg", title: "Thumbnail 15" }
            
        ],
        graphics: [
            { url: "assets/graphics/sample17.jpg", title: "Graphic 1" },
            { url: "assets/graphics/sample18.jpg", title: "Graphic 2" }
        ]
    };

    designLinks[category].forEach(link => {
        let img = document.createElement("img");
        img.src = link.url;
        img.alt = link.title;
        img.title = link.title;
        img.width = "300";
        img.height = "300";
        sampleContainer.appendChild(img);
    });
}