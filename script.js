// كود الوقت - يشتغل في index.html
function showTime() {
    const timeElement = document.getElementById('visit-time');
    if (timeElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', year: 'numeric', month: 'long', 
            day: 'numeric', hour: '2-digit', minute: '2-digit' 
        };
        timeElement.textContent = `وقت تصفحك: ${now.toLocaleDateString('ar-SA', options)}`;
    }
}

// كود صفحة الألوان
function changeBg() {
    const color = document.getElementById('colorPicker');
    if (color) document.body.style.backgroundColor = color.value;
}

function addColor() {
    const color = document.getElementById('colorPicker');
    const list = document.getElementById('colorList');
    if (color && list) {
        const option = document.createElement('option');
        option.value = color.value;
        option.textContent = color.value;
        option.style.backgroundColor = color.value;
        list.appendChild(option);
    }
}

function initColorPage() {
    const colorList = document.getElementById('colorList');
    if (colorList) {
        colorList.onchange = function() {
            if(this.value !== 'الألوان المحفوظة') 
                document.body.style.backgroundColor = this.value;
        };
    }

    const packages = {
        matlab: 'MATLAB: للحوسبة العددية والمحاكاة',
        mathematica: 'Mathematica: للحساب الرمزي',
        maple: 'Maple: لحل المعادلات والجبر الحاسوبي',
        spss: 'SPSS: للتحليل الإحصائي',
        geogebra: 'GeoGebra: للهندسة التفاعلية'
    };
    
    const mathPackages = document.getElementById('mathPackages');
    const packageDesc = document.getElementById('packageDesc');
    if (mathPackages && packageDesc) {
        mathPackages.onchange = function() {
            packageDesc.textContent = packages[this.value] || '';
        };
    }
}

// كود صفحة التسجيل
function initRegisterPage() {
    const terms = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('registerForm');

    if (terms && submitBtn) {
        terms.onchange = function() {
            submitBtn.disabled = !this.checked;
        };
    }

    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            let valid = true;

            const name = document.getElementById('fullName');
            const nameError = document.getElementById('nameError');
            if(name.value.trim() === '') {
                nameError.style.display = 'block';
                name.classList.add('error');
                valid = false;
            } else {
                nameError.style.display = 'none';
                name.classList.remove('error');
            }

            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                emailError.style.display = 'block';
                email.classList.add('error');
                valid = false;
            } else {
                emailError.style.display = 'none';
                email.classList.remove('error');
            }

            const pass = document.getElementById('password');
            const passError = document.getElementById('passError');
            if(pass.value.length < 6) {
                passError.style.display = 'block';
                pass.classList.add('error');
                valid = false;
            } else {
                passError.style.display = 'none';
                pass.classList.remove('error');
            }

            if(valid && terms.checked) {
                alert('تم التسجيل بنجاح ✅');
                form.reset();
                submitBtn.disabled = true;
            }
        };
    }
}

// تشغيل الأكواد حسب الصفحة
document.addEventListener('DOMContentLoaded', function() {
    showTime();
    initColorPage();
    initRegisterPage();
});