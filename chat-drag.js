// chat-drag.js
(function () {
    'use strict';

    function initDraggableChatWidget() {
        const widget = document.getElementById('chatWidget');
        if (!widget) return;

        const header = widget.querySelector('.chat-header');
        if (!header) return;

        // Native drag & drop kapat
        header.setAttribute('draggable', 'false');

        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let startLeft = 0;
        let startTop = 0;
        let widgetWidth = 0;
        let widgetHeight = 0;
        const margin = 8; // Kenarlarda 8px pay kalsın

        function startDrag(clientX, clientY) {
            isDragging = true;
            header.classList.add('dragging');

            const rect = widget.getBoundingClientRect();
            startX = clientX;
            startY = clientY;
            startLeft = rect.left;
            startTop = rect.top;
            widgetWidth = rect.width;
            widgetHeight = rect.height;

            // bottom/right yerine top/left kullan
            widget.style.left = rect.left + 'px';
            widget.style.top = rect.top + 'px';
            widget.style.right = 'auto';
            widget.style.bottom = 'auto';

            // Animasyonu sürüklerken kapat
            widget.dataset.prevTransition = widget.style.transition || '';
            widget.style.transition = 'none';
        }

        function updatePosition(clientX, clientY) {
            if (!isDragging) return;

            const dx = clientX - startX;
            const dy = clientY - startY;

            let newLeft = startLeft + dx;
            let newTop = startTop + dy;

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const maxLeft = viewportWidth - widgetWidth - margin;
            const maxTop = viewportHeight - widgetHeight - margin;

            // Tamamen ekran içinde kal
            if (maxLeft < margin) {
                newLeft = margin;
            } else {
                newLeft = Math.min(Math.max(margin, newLeft), maxLeft);
            }

            if (maxTop < margin) {
                newTop = margin;
            } else {
                newTop = Math.min(Math.max(margin, newTop), maxTop);
            }

            widget.style.left = newLeft + 'px';
            widget.style.top = newTop + 'px';
        }

        function finishDrag() {
            if (!isDragging) return;
            isDragging = false;
            header.classList.remove('dragging');

            // Animasyonu eski haline getir
            if (widget.dataset.prevTransition !== undefined) {
                widget.style.transition = widget.dataset.prevTransition;
                delete widget.dataset.prevTransition;
            }
        }

        // Mouse
        function onMouseDown(e) {
            if (e.button !== 0) return; // Sadece sol tık
            e.preventDefault();
            startDrag(e.clientX, e.clientY);
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }

        function onMouseMove(e) {
            e.preventDefault();
            updatePosition(e.clientX, e.clientY);
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            finishDrag();
        }

        // Touch (mobil)
        function onTouchStart(e) {
            if (!e.touches || e.touches.length === 0) return;
            const t = e.touches[0];
            e.preventDefault();
            startDrag(t.clientX, t.clientY);
            document.addEventListener('touchmove', onTouchMove, { passive: false });
            document.addEventListener('touchend', onTouchEnd);
            document.addEventListener('touchcancel', onTouchEnd);
        }

        function onTouchMove(e) {
            if (!e.touches || e.touches.length === 0) return;
            const t = e.touches[0];
            e.preventDefault();
            updatePosition(t.clientX, t.clientY);
        }

        function onTouchEnd() {
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
            document.removeEventListener('touchcancel', onTouchEnd);
            finishDrag();
        }

        header.addEventListener('mousedown', onMouseDown);
        header.addEventListener('touchstart', onTouchStart, { passive: false });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDraggableChatWidget);
    } else {
        initDraggableChatWidget();
    }
})();
