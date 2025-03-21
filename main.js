document.addEventListener('DOMContentLoaded', function() {
    // Array of different titles to cycle through
    const titles = [
        "Praktronix Labs: Unleash Young Innovators With Hands-On Electronics",
        "Build Your Own Electronics Lab: 200+ Exciting Experiments",
        "Future Engineers Start Here: Praktronix Labs Interactive Learning",
        "Discover Electronics Through Play: Praktronix Labs for Kids",
        "STEM Education Reimagined: Praktronix Labs Electronic Kits"
    ];
    
    const descriptionText = "Transform learning into innovation with Praktronix Labs' 200+ interactive electronics experiments. Our comprehensive learning system guides children through circuits, transistors, and core principles in a safe, engaging environment. Perfect for schools and young tech enthusiasts, our step-by-step lab sessions develop critical thinking and creativity while building tomorrow's inventors. Affordable, durable, and curriculum-aligned — because every child deserves access to the future of technology education.";
    
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    
    // Create cursor element for description
    const descriptionCursor = document.createElement('span');
    descriptionCursor.className = 'cursor';
    
    // Start with typing the first title
    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    // Type description function (runs after first title is displayed)
    let descIndex = 0;
    const typeDescription = () => {
        if (descIndex < descriptionText.length) {
            descriptionElement.insertBefore(document.createTextNode(descriptionText.charAt(descIndex)), descriptionCursor);
            descIndex++;
            setTimeout(typeDescription, 15);  // Faster typing for description
        }
    };
    
    // Function to type and delete titles
    const typeTitleCycle = () => {
        const currentTitle = titles[currentTitleIndex];
        
        // Speed adjustments - faster for deleting, slower for typing
        const typingSpeed = 80; // Speed for typing
        const deletingSpeed = 40; // Speed for deleting
        const pauseBetweenTitles = 2000; // Pause between titles
        
        if (!isDeleting && currentCharIndex <= currentTitle.length) {
            // Typing effect
            titleElement.textContent = currentTitle.substring(0, currentCharIndex);
            currentCharIndex++;
            
            // When we finish typing a title, set timer to start deleting
            if (currentCharIndex > currentTitle.length) {
                // Start description typing after first title is complete
                if (currentTitleIndex === 0 && descIndex === 0) {
                    descriptionElement.appendChild(descriptionCursor);
                    setTimeout(typeDescription, 500);
                }
                
                // Wait before starting to delete
                setTimeout(() => { isDeleting = true; }, pauseBetweenTitles);
            }
        } 
        else if (isDeleting && currentCharIndex >= 0) {
            // Deleting effect
            titleElement.textContent = currentTitle.substring(0, currentCharIndex);
            currentCharIndex--;
            
            // When deleting is complete, move to next title
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            }
        }
        
        // Continue the cycle
        setTimeout(typeTitleCycle, isDeleting ? deletingSpeed : typingSpeed);
    };
    
    // Start the typing animation with a delay
    setTimeout(typeTitleCycle, 1000);
});