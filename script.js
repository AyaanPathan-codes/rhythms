<script>
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the intersection events
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Add animation class when element is in view
            } else {
                entry.target.classList.remove('animate'); // Remove animation class when element is out of view
            }
        });
    };

    // Initialize the Intersection Observer with a callback function
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    // Observe each bubble element
    document.querySelectorAll('.bubble').forEach(bubble => {
        observer.observe(bubble);
    });
});
</script>
