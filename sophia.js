//sophia.js
// Get DOM elements
        const chatIcon = document.getElementById('chatIcon');
        const modalOverlay = document.getElementById('modalOverlay');
        const closeModal = document.getElementById('closeModal');
        const modalFrame = document.getElementById('modal-frame');
        
        // Open modal when chat icon is clicked
        chatIcon.addEventListener('click', function() {
            // Hide the chat icon with smooth animation
            chatIcon.classList.add('hidden');
            
            // Show the modal after a short delay
            setTimeout(() => {
                modalOverlay.classList.add('active');
                
                // Show loading state
                modalFrame.style.display = 'none';
                const loadingDiv = document.createElement('div');
                loadingDiv.className = 'loading-message';
                loadingDiv.innerHTML = `
                    <div class="spinner"></div>
                    <p>Loading Sophia AI Agent...</p>
                `;
                
                // Remove any existing loading message
                const existingLoading = modalFrame.parentElement.querySelector('.loading-message');
                if (existingLoading) {
                    existingLoading.remove();
                }
                
                modalFrame.parentElement.appendChild(loadingDiv);
                
                // Set iframe source after a brief delay to show loading state
                setTimeout(() => {
                    modalFrame.src = 'sophia3.html';
                    
                    // When iframe loads, remove loading message and show iframe
                    modalFrame.onload = function() {
                        loadingDiv.remove();
                        modalFrame.style.display = 'block';
                    };
                    
                    // Handle iframe loading errors
                    modalFrame.onerror = function() {
                        loadingDiv.innerHTML = `
                            <div style="color: #e74c3c; font-size: 48px; margin-bottom: 15px;">
                                <i class="fas fa-exclamation-triangle"></i>
                            </div>
                            <h3>Page Not Found</h3>
                            <p>Could not load page.html</p>
                            <p style="margin-top: 15px; font-size: 14px;">
                                Create a page.html file in the same directory to see the content here.
                            </p>
                        `;
                    };
                }, 500);
            }, 300);
        });
        
        // Close modal when close button is clicked
        closeModal.addEventListener('click', function() {
            // Hide the modal
            modalOverlay.classList.remove('active');
            
            // Reset iframe source when closing modal
            setTimeout(() => {
                modalFrame.src = 'about:blank';
            }, 300);
            
            // Show the chat icon after modal closes
            setTimeout(() => {
                chatIcon.classList.remove('hidden');
            }, 400);
        });
        
        // Close modal when clicking outside the content
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                // Hide the modal
                modalOverlay.classList.remove('active');
                
                // Reset iframe source when closing modal
                setTimeout(() => {
                    modalFrame.src = 'about:blank';
                }, 300);
                
                // Show the chat icon after modal closes
                setTimeout(() => {
                    chatIcon.classList.remove('hidden');
                }, 400);
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                // Hide the modal
                modalOverlay.classList.remove('active');
                
                // Reset iframe source when closing modal
                setTimeout(() => {
                    modalFrame.src = 'about:blank';
                }, 300);
                
                // Show the chat icon after modal closes
                setTimeout(() => {
                    chatIcon.classList.remove('hidden');
                }, 400);
            }
        });