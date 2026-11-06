(function () {
    'use strict';

    // ── Modal ──
    function Modal(el) {
        this._el = el;
        this._prevFocus = null;
        this._justOpened = false; 
        el._apModal = this;
    }
    Modal.prototype.show = function () {
        this._prevFocus = document.activeElement;
        this._el.classList.add('show');
        document.body.style.overflow = 'hidden';
        var box = this._el.querySelector('.ap-warning-box');
        if (box) { box.setAttribute('tabindex', '-1'); box.focus(); }

        var self = this;
        this._justOpened = true;
        setTimeout(function () { self._justOpened = false; }, 0);
    };
    Modal.prototype.hide = function () {
        this._el.classList.remove('show');
        document.body.style.overflow = '';
        if (this._prevFocus && this._prevFocus.focus) this._prevFocus.focus();
    };
    Modal.getInstance = function (el) { return el._apModal || null; };
    Modal.getOrCreateInstance = function (el) { return el._apModal || new Modal(el); };

    // ── Toast ──
    function Toast(el, opts) {
        this._el = el;
        this._autohide = !opts || opts.autohide !== false;
        this._delay = (opts && opts.delay) || 5000;
        el._apToast = this;
    }
    Toast.prototype.show = function () {
        var self = this;
        this._el.classList.add('show');
        if (this._autohide) this._timer = setTimeout(function () { self.hide(); }, this._delay);
    };
    Toast.prototype.hide = function () {
        var el = this._el;
        clearTimeout(this._timer);
        el.classList.remove('show');
        setTimeout(function () { el.dispatchEvent(new Event('hidden.bs.toast')); }, 200);
    };

    window.bootstrap = window.bootstrap || {};
    window.bootstrap.Modal = Modal;
    window.bootstrap.Toast = Toast;

    document.addEventListener('click', function (e) {
        var t = e.target;
        var modalEl = document.querySelector('.ap-warning-overlay.show');

        if (modalEl) {
            var inst = Modal.getOrCreateInstance(modalEl);

            if (inst._justOpened) return;

            if (t === modalEl || (t.closest && t.closest('[data-close], [data-bs-dismiss="modal"]'))) {
                inst.hide();
                return;
            }
        }

        var dismiss = t.closest && t.closest('[data-bs-dismiss="toast"]');
        if (dismiss) {
            var toastEl = dismiss.closest('.toast');
            if (toastEl && toastEl._apToast) toastEl._apToast.hide();
            else if (toastEl) toastEl.remove();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        var modalEl = document.querySelector('.ap-warning-overlay.show');
        if (modalEl) Modal.getOrCreateInstance(modalEl).hide();
    });
})();