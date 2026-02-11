// Doctors Database - Include directly to ensure it's always available
if (typeof window.doctorsDatabase === 'undefined') {
    window.doctorsDatabase = {
        "General Medicine": [
            { id: 1, name: "Dr. Priya Sharma", specialty: "General Physician", rating: 4.9, experience: 15, experienceText: "15 YEARS", credentials: "MBBS, MD (General Medicine)", location: "Mumbai", clinic: "Medify Clinic - Maharashtra, Mumbai", price: 500, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 2, name: "Dr. Rajesh Kumar", specialty: "General Physician", rating: 4.8, experience: 12, experienceText: "12 YEARS", credentials: "MBBS, MD (Internal Medicine)", location: "Delhi", clinic: "Medify Clinic - Delhi, New Delhi", price: 450, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 3, name: "Dr. Anjali Singh", specialty: "General Physician", rating: 4.7, experience: 10, experienceText: "10 YEARS", credentials: "MBBS, MD (General Medicine)", location: "Bangalore", clinic: "Medify Clinic - Karnataka, Bangalore", price: 400, best: false, onlineAvailable: true, hospitalVisit: false, languages: ["English"] },
            { id: 4, name: "Dr. Vikram Patel", specialty: "General Physician", rating: 4.6, experience: 8, experienceText: "8 YEARS", credentials: "MBBS, MD", location: "Chennai", clinic: "Medify Clinic - Tamil Nadu, Chennai", price: 350, best: false, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 101, name: "Dr. Ramesh Iyer", specialty: "General Physician", rating: 4.8, experience: 14, experienceText: "14 YEARS", credentials: "MBBS, MD (General Medicine)", location: "Bangalore", clinic: "Medify Clinic - Karnataka, Bangalore", price: 480, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 102, name: "Dr. Meera Nair", specialty: "General Physician", rating: 4.7, experience: 11, experienceText: "11 YEARS", credentials: "MBBS, MD", location: "Kochi", clinic: "Medify Clinic - Kerala, Kochi", price: 420, best: false, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 103, name: "Dr. Suresh Reddy", specialty: "General Physician", rating: 4.6, experience: 9, experienceText: "9 YEARS", credentials: "MBBS, MD (Internal Medicine)", location: "Hyderabad", clinic: "Medify Clinic - Telangana, Hyderabad", price: 380, best: false, onlineAvailable: true, hospitalVisit: false, languages: ["English", "Hindi"] },
            { id: 104, name: "Dr. Geeta Malhotra", specialty: "General Physician", rating: 4.8, experience: 13, experienceText: "13 YEARS", credentials: "MBBS, MD (General Medicine)", location: "Delhi", clinic: "Medify Clinic - Delhi, New Delhi", price: 470, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 105, name: "Dr. Karthik Nambiar", specialty: "General Physician", rating: 4.7, experience: 10, experienceText: "10 YEARS", credentials: "MBBS, MD", location: "Thiruvananthapuram", clinic: "Medify Clinic - Kerala, Thiruvananthapuram", price: 410, best: false, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 106, name: "Dr. Swati Joshi", specialty: "General Physician", rating: 4.6, experience: 7, experienceText: "7 YEARS", credentials: "MBBS, MD (Internal Medicine)", location: "Ahmedabad", clinic: "Medify Clinic - Gujarat, Ahmedabad", price: 370, best: false, onlineAvailable: true, hospitalVisit: false, languages: ["English", "Hindi"] }
        ],
        "Cardiology": [
            { id: 5, name: "Dr. Sanjay Mehta", specialty: "Cardiologist", rating: 4.9, experience: 20, experienceText: "20 YEARS", credentials: "MBBS, MD, DM (Cardiology)", location: "Mumbai", clinic: "Medify Clinic - Maharashtra, Mumbai", price: 800, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 6, name: "Dr. Neha Gupta", specialty: "Cardiologist", rating: 4.8, experience: 18, experienceText: "18 YEARS", credentials: "MBBS, MD, DM (Cardiology)", location: "Delhi", clinic: "Medify Clinic - Delhi, New Delhi", price: 750, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 7, name: "Dr. Amit Desai", specialty: "Cardiologist", rating: 4.7, experience: 15, experienceText: "15 YEARS", credentials: "MBBS, MD, DM (Cardiology)", location: "Bangalore", clinic: "Medify Clinic - Karnataka, Bangalore", price: 700, best: false, onlineAvailable: true, hospitalVisit: false, languages: ["English"] },
            { id: 8, name: "Dr. Kavita Reddy", specialty: "Cardiologist", rating: 4.6, experience: 12, experienceText: "12 YEARS", credentials: "MBBS, MD, DM", location: "Hyderabad", clinic: "Medify Clinic - Telangana, Hyderabad", price: 650, best: false, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 114, name: "Dr. Ashok Menon", specialty: "Cardiologist", rating: 4.9, experience: 22, experienceText: "22 YEARS", credentials: "MBBS, MD, DM (Cardiology)", location: "Chennai", clinic: "Medify Clinic - Tamil Nadu, Chennai", price: 850, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 115, name: "Dr. Deepika Ramesh", specialty: "Cardiologist", rating: 4.8, experience: 16, experienceText: "16 YEARS", credentials: "MBBS, MD, DM (Cardiology)", location: "Pune", clinic: "Medify Clinic - Maharashtra, Pune", price: 720, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 116, name: "Dr. Ravi Shankar", specialty: "Cardiologist", rating: 4.8, experience: 17, experienceText: "17 YEARS", credentials: "MBBS, MD, DM (Cardiology)", location: "Kolkata", clinic: "Medify Clinic - West Bengal, Kolkata", price: 730, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 117, name: "Dr. Sarika Pawar", specialty: "Cardiologist", rating: 4.7, experience: 14, experienceText: "14 YEARS", credentials: "MBBS, MD, DM (Cardiology)", location: "Nagpur", clinic: "Medify Clinic - Maharashtra, Nagpur", price: 680, best: false, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] }
        ],
        "Dermatology": [
            { id: 9, name: "Dr. Ritika Shanmugam", specialty: "Dermatologist", rating: 4.9, experience: 9, experienceText: "9 YEARS", credentials: "MBBS, MD (Dermatology, Venereology & Leprosy)", location: "Bangalore", clinic: "Medify Clinic - Karnataka, Bangalore", price: 760, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 10, name: "Dr. Usha B K", specialty: "Dermatologist", rating: 4.8, experience: 4, experienceText: "4 YEARS", credentials: "MBBS, MD (Dermatology, Venereology)", location: "Bangalore", clinic: "Medify Clinic - Karnataka, Bangalore", price: 660, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 11, name: "Dr. Hemalatha Naidu M", specialty: "Dermatologist", rating: 4.7, experience: 7, experienceText: "7 YEARS", credentials: "MBBS, MD (Dermatology)", location: "Chennai", clinic: "Medify Clinic - Tamil Nadu, Chennai", price: 660, best: false, onlineAvailable: true, hospitalVisit: false, languages: ["English"] },
            { id: 12, name: "Dr. Sneha Iyer", specialty: "Dermatologist", rating: 4.9, experience: 14, experienceText: "14 YEARS", credentials: "MBBS, MD (Dermatology)", location: "Mumbai", clinic: "Medify Clinic - Maharashtra, Mumbai", price: 600, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 118, name: "Dr. Kavita Deshmukh", specialty: "Dermatologist", rating: 4.8, experience: 11, experienceText: "11 YEARS", credentials: "MBBS, MD (Dermatology)", location: "Pune", clinic: "Medify Clinic - Maharashtra, Pune", price: 680, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 119, name: "Dr. Praveen Nair", specialty: "Dermatologist", rating: 4.7, experience: 8, experienceText: "8 YEARS", credentials: "MBBS, MD (Dermatology)", location: "Delhi", clinic: "Medify Clinic - Delhi, New Delhi", price: 620, best: false, onlineAvailable: true, hospitalVisit: false, languages: ["English", "Hindi"] },
            { id: 120, name: "Dr. Aarti Mehta", specialty: "Dermatologist", rating: 4.9, experience: 12, experienceText: "12 YEARS", credentials: "MBBS, MD (Dermatology)", location: "Ahmedabad", clinic: "Medify Clinic - Gujarat, Ahmedabad", price: 720, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 121, name: "Dr. Vijayalakshmi Ramachandran", specialty: "Dermatologist", rating: 4.8, experience: 10, experienceText: "10 YEARS", credentials: "MBBS, MD (Dermatology)", location: "Coimbatore", clinic: "Medify Clinic - Tamil Nadu, Coimbatore", price: 640, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English"] }
        ],
        "Pediatrics": [
            { id: 13, name: "Dr. Shilpa Agarwal", specialty: "Pediatrician", rating: 4.9, experience: 16, experienceText: "16 YEARS", credentials: "MBBS, MD (Pediatrics)", location: "Delhi", clinic: "Medify Clinic - Delhi, New Delhi", price: 550, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 14, name: "Dr. Rohit Shah", specialty: "Pediatrician", rating: 4.8, experience: 13, experienceText: "13 YEARS", credentials: "MBBS, MD (Pediatrics)", location: "Mumbai", clinic: "Medify Clinic - Maharashtra, Mumbai", price: 500, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 15, name: "Dr. Divya Rao", specialty: "Pediatrician", rating: 4.7, experience: 10, experienceText: "10 YEARS", credentials: "MBBS, MD (Pediatrics)", location: "Bangalore", clinic: "Medify Clinic - Karnataka, Bangalore", price: 450, best: false, onlineAvailable: true, hospitalVisit: false, languages: ["English"] },
            { id: 16, name: "Dr. Arjun Chawla", specialty: "Pediatrician", rating: 4.6, experience: 8, experienceText: "8 YEARS", credentials: "MBBS, MD", location: "Pune", clinic: "Medify Clinic - Maharashtra, Pune", price: 400, best: false, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 122, name: "Dr. Padma Srinivasan", specialty: "Pediatrician", rating: 4.9, experience: 17, experienceText: "17 YEARS", credentials: "MBBS, MD (Pediatrics)", location: "Chennai", clinic: "Medify Clinic - Tamil Nadu, Chennai", price: 580, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 123, name: "Dr. Mahesh Joshi", specialty: "Pediatrician", rating: 4.8, experience: 12, experienceText: "12 YEARS", credentials: "MBBS, MD (Pediatrics)", location: "Ahmedabad", clinic: "Medify Clinic - Gujarat, Ahmedabad", price: 480, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 124, name: "Dr. Kavita Bhatia", specialty: "Pediatrician", rating: 4.9, experience: 15, experienceText: "15 YEARS", credentials: "MBBS, MD (Pediatrics)", location: "Kolkata", clinic: "Medify Clinic - West Bengal, Kolkata", price: 560, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 125, name: "Dr. Rohan Desai", specialty: "Pediatrician", rating: 4.7, experience: 9, experienceText: "9 YEARS", credentials: "MBBS, MD (Pediatrics)", location: "Surat", clinic: "Medify Clinic - Gujarat, Surat", price: 430, best: false, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] }
        ],
        "Gynecology": [
            { id: 17, name: "Dr. Sunita Verma", specialty: "Gynecologist", rating: 4.9, experience: 18, experienceText: "18 YEARS", credentials: "MBBS, MS (Obstetrics & Gynecology)", location: "Delhi", clinic: "Medify Clinic - Delhi, New Delhi", price: 700, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 18, name: "Dr. Nisha Kapoor", specialty: "Gynecologist", rating: 4.8, experience: 15, experienceText: "15 YEARS", credentials: "MBBS, MS (Obstetrics & Gynecology)", location: "Mumbai", clinic: "Medify Clinic - Maharashtra, Mumbai", price: 650, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 19, name: "Dr. Meera Chopra", specialty: "Gynecologist", rating: 4.7, experience: 12, experienceText: "12 YEARS", credentials: "MBBS, MS", location: "Bangalore", clinic: "Medify Clinic - Karnataka, Bangalore", price: 600, best: false, onlineAvailable: true, hospitalVisit: false, languages: ["English", "Hindi"] },
            { id: 20, name: "Dr. Pooja Sethi", specialty: "Gynecologist", rating: 4.6, experience: 10, experienceText: "10 YEARS", credentials: "MBBS, MS (Obstetrics & Gynecology)", location: "Chennai", clinic: "Medify Clinic - Tamil Nadu, Chennai", price: 550, best: false, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 126, name: "Dr. Lakshmi Venkatesh", specialty: "Gynecologist", rating: 4.9, experience: 19, experienceText: "19 YEARS", credentials: "MBBS, MS (Obstetrics & Gynecology)", location: "Hyderabad", clinic: "Medify Clinic - Telangana, Hyderabad", price: 720, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 127, name: "Dr. Rekha Malhotra", specialty: "Gynecologist", rating: 4.8, experience: 14, experienceText: "14 YEARS", credentials: "MBBS, MS (Obstetrics & Gynecology)", location: "Pune", clinic: "Medify Clinic - Maharashtra, Pune", price: 630, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 128, name: "Dr. Priyanka Reddy", specialty: "Gynecologist", rating: 4.9, experience: 16, experienceText: "16 YEARS", credentials: "MBBS, MS (Obstetrics & Gynecology)", location: "Bangalore", clinic: "Medify Clinic - Karnataka, Bangalore", price: 680, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 129, name: "Dr. Anitha Menon", specialty: "Gynecologist", rating: 4.7, experience: 11, experienceText: "11 YEARS", credentials: "MBBS, MS (Obstetrics & Gynecology)", location: "Thrissur", clinic: "Medify Clinic - Kerala, Thrissur", price: 580, best: false, onlineAvailable: true, hospitalVisit: true, languages: ["English"] }
        ],
        "Orthopedics": [
            { id: 21, name: "Dr. Manoj Tiwari", specialty: "Orthopedist", rating: 4.9, experience: 19, experienceText: "19 YEARS", credentials: "MBBS, MS (Orthopedics)", location: "Delhi", clinic: "Medify Clinic - Delhi, New Delhi", price: 750, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 22, name: "Dr. Supriya Bansal", specialty: "Orthopedist", rating: 4.8, experience: 16, experienceText: "16 YEARS", credentials: "MBBS, MS (Orthopedics)", location: "Mumbai", clinic: "Medify Clinic - Maharashtra, Mumbai", price: 700, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 23, name: "Dr. Varun Khanna", specialty: "Orthopedist", rating: 4.7, experience: 13, experienceText: "13 YEARS", credentials: "MBBS, MS", location: "Bangalore", clinic: "Medify Clinic - Karnataka, Bangalore", price: 650, best: false, onlineAvailable: true, hospitalVisit: false, languages: ["English", "Hindi"] },
            { id: 24, name: "Dr. Tanvi Mathur", specialty: "Orthopedist", rating: 4.6, experience: 11, experienceText: "11 YEARS", credentials: "MBBS, MS (Orthopedics)", location: "Pune", clinic: "Medify Clinic - Maharashtra, Pune", price: 600, best: false, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 130, name: "Dr. Karthik Subramanian", specialty: "Orthopedist", rating: 4.9, experience: 21, experienceText: "21 YEARS", credentials: "MBBS, MS (Orthopedics)", location: "Chennai", clinic: "Medify Clinic - Tamil Nadu, Chennai", price: 780, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English"] },
            { id: 131, name: "Dr. Aditya Sood", specialty: "Orthopedist", rating: 4.8, experience: 14, experienceText: "14 YEARS", credentials: "MBBS, MS (Orthopedics)", location: "Chandigarh", clinic: "Medify Clinic - Punjab, Chandigarh", price: 680, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 132, name: "Dr. Neeraj Agarwal", specialty: "Orthopedist", rating: 4.9, experience: 18, experienceText: "18 YEARS", credentials: "MBBS, MS (Orthopedics)", location: "Jaipur", clinic: "Medify Clinic - Rajasthan, Jaipur", price: 740, best: true, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] },
            { id: 133, name: "Dr. Swati Kulkarni", specialty: "Orthopedist", rating: 4.7, experience: 12, experienceText: "12 YEARS", credentials: "MBBS, MS (Orthopedics)", location: "Nagpur", clinic: "Medify Clinic - Maharashtra, Nagpur", price: 620, best: false, onlineAvailable: true, hospitalVisit: true, languages: ["English", "Hindi"] }
        ]
    };
}

// Make currentDepartment globally accessible
window.currentDepartment = null;

// Get specialty from URL parameter
const urlParams = new URLSearchParams(window.location.search);
let specialtyParam = urlParams.get('specialty');
// Decode and trim the specialty parameter
if (specialtyParam) {
    specialtyParam = decodeURIComponent(specialtyParam).trim();
}
const specialtyNames = {
    "General Medicine": "General Physicians",
    "Cardiology": "Cardiologists",
    "Dermatology": "Dermatologists",
    "Pediatrics": "Pediatricians",
    "Gynecology": "Gynecologists",
    "Orthopedics": "Orthopedists"
};

// Specialty to Department mapping (matches script.js)
const specialtyToDepartment = {
    "General Medicine": "General Medicine",
    "General Physician": "General Medicine",
    "Dermatology": "Dermatology",
    "Gynecology": "Gynecology",
    "Obstetrics & Gynecology": "Gynecology",
    "Orthopedics": "Orthopedics",
    "Orthopaedics": "Orthopedics",
    "Cardiology": "Cardiology",
    "Pediatrics": "Pediatrics",
    "Paediatrics": "Pediatrics"
};

// Initialize page - run after window loads to ensure script.js is loaded
window.addEventListener('load', function() {
    // Map specialty to department (fallback to specialtyParam if no mapping)
    const department = specialtyToDepartment[specialtyParam] || specialtyParam || "Cardiology";
    const specialtyName = specialtyNames[department] || specialtyNames[specialtyParam] || "Doctors";
    window.currentDepartment = department;
    
    // Update page title and breadcrumb
    const doctorsPageTitle = document.getElementById('doctors-page-title');
    const breadcrumbSpecialty = document.getElementById('breadcrumb-specialty');
    
    if (doctorsPageTitle) {
        doctorsPageTitle.textContent = `Consult ${specialtyName} Online`;
    }
    
    if (breadcrumbSpecialty) {
        breadcrumbSpecialty.textContent = specialtyName;
    }
    
    // Function to display doctors - direct approach
    function displayDoctors() {
        const container = document.getElementById('doctors-list-container');
        const countEl = document.getElementById('doctors-count');
        
        if (!container) {
            setTimeout(displayDoctors, 50);
            return;
        }
        
        // Wait for database to load and be populated
        if (typeof window.doctorsDatabase === 'undefined' || !window.doctorsDatabase || Object.keys(window.doctorsDatabase).length === 0) {
            console.log('Waiting for doctorsDatabase to load and be populated...');
            setTimeout(displayDoctors, 50);
            return;
        }
        
        // Try to get doctors from database
        let doctors = window.doctorsDatabase[department] || [];
        
        // If no doctors found, try alternative department names
        if (doctors.length === 0 && specialtyParam) {
            const altDepartment = specialtyToDepartment[specialtyParam] || specialtyParam;
            if (altDepartment !== department) {
                doctors = window.doctorsDatabase[altDepartment] || [];
                if (doctors.length > 0) {
                    window.currentDepartment = altDepartment;
                }
            }
        }
        
        console.log('=== DOCTORS DISPLAY DEBUG ===');
        console.log('Department:', department);
        console.log('Specialty param:', specialtyParam);
        console.log('Found doctors:', doctors.length);
        console.log('Available departments:', Object.keys(window.doctorsDatabase || {}));
        console.log('Database keys:', window.doctorsDatabase ? Object.keys(window.doctorsDatabase) : 'N/A');
        console.log('Doctors data:', doctors);
        
        if (doctors.length === 0) {
            container.innerHTML = '<div style="padding: 40px; text-align: center; color: #999; font-size: 1.1rem;">No doctors found for this specialty</div>';
            if (countEl) countEl.textContent = '(0 doctors)';
            return;
        }
        
        // Apply filters if function exists
        let filteredDoctors = doctors;
        if (typeof window.applyFilters === 'function') {
            try {
                // Check if filters would exclude all doctors
                const hospitalFilter = document.getElementById('filter-hospital');
                const onlineFilter = document.getElementById('filter-online');
                
                // If both filters are checked (default), show all doctors
                if (hospitalFilter && onlineFilter && hospitalFilter.checked && onlineFilter.checked) {
                    // Both checked means show all, but still apply other filters
                    filteredDoctors = window.applyFilters(doctors);
                } else {
                    filteredDoctors = window.applyFilters(doctors);
                }
                console.log('After filtering:', filteredDoctors.length, 'doctors');
                
                // If filters result in 0 doctors but we have doctors, show all (filter might be too restrictive)
                if (filteredDoctors.length === 0 && doctors.length > 0) {
                    console.warn('Filters excluded all doctors, showing all doctors instead');
                    filteredDoctors = doctors;
                }
            } catch (e) {
                console.error('Error applying filters:', e);
                filteredDoctors = doctors; // Use unfiltered if filter fails
            }
        }
        
        if (filteredDoctors.length === 0) {
            container.innerHTML = '<div style="padding: 40px; text-align: center; color: #999; font-size: 1.1rem;">No doctors found matching your filters. Try clearing filters.</div>';
            if (countEl) countEl.textContent = '(0 doctors)';
            return;
        }
        
        // Create HTML for doctor cards
        let html = '';
        if (typeof window.createDoctorCard === 'function') {
            filteredDoctors.forEach(doctor => {
                html += window.createDoctorCard(doctor, department);
            });
        } else {
            // Fallback HTML
            filteredDoctors.forEach(doctor => {
                html += `
                    <div class="doctor-card" style="display: flex !important; visibility: visible !important; opacity: 1 !important; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); padding: 20px; margin-bottom: 20px; position: relative;">
                        <div class="on-time-badge" style="position: absolute; top: 15px; right: 15px; background: #1976d2; color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.7rem; font-weight: 600; z-index: 1; pointer-events: none;">ON TIME GUARANTEE</div>
                        <div class="doctor-avatar" style="width: 100px; height: 100px; border-radius: 8px; background: #e0f2f1; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-right: 20px; overflow: hidden;">
                            <i class="fas fa-user-md" style="font-size: 3rem; color: #0097a7;"></i>
                        </div>
                        <div class="doctor-details" style="flex: 1; display: flex; flex-direction: column;">
                            <div style="flex: 1;">
                                <h3 style="margin: 0; font-size: 1.2rem; font-weight: 600; color: #333;">${doctor.name}</h3>
                                <div style="color: #333; font-size: 0.95rem; margin-bottom: 4px; font-weight: 500;">${doctor.specialty}</div>
                                <div style="color: #666; font-size: 0.9rem; margin-bottom: 4px;">${doctor.experienceText || doctor.experience + ' YEARS'} • ${doctor.credentials}</div>
                                <div style="color: #666; font-size: 0.9rem; margin-bottom: 4px;">${doctor.location}</div>
                                <div style="color: #666; font-size: 0.9rem; margin-bottom: 12px;">${doctor.clinic}</div>
                            </div>
                            <div style="margin-top: 15px;">
                                <div style="font-size: 1.4rem; font-weight: 700; color: #333; margin-bottom: 12px;">₹${doctor.price}</div>
                                <div style="display: flex; gap: 10px; flex-wrap: wrap; position: relative; z-index: 100;">
                                    ${doctor.onlineAvailable ? `
                                        <button class="btn-online-consult" data-doctor-id="${doctor.id}" data-department="${department}" data-type="online" onclick="event.preventDefault(); event.stopPropagation(); console.log('Button clicked!'); if(window.selectDoctor) { window.selectDoctor(${doctor.id}, '${department}', 'online'); } else { alert('Function not loaded. Please refresh.'); } return false;" style="padding: 10px 24px; background: transparent; color: #0097a7; border: 2px solid #0097a7; border-radius: 6px; cursor: pointer !important; font-weight: 600; font-size: 0.95rem; transition: all 0.3s; white-space: nowrap; position: relative; z-index: 100 !important; pointer-events: auto !important; user-select: none; -webkit-tap-highlight-color: transparent;">
                                            <i class="fas fa-video" style="margin-right: 5px; pointer-events: none;"></i> Online Consult
                                        </button>
                                    ` : ''}
                                    ${doctor.hospitalVisit ? `
                                        <button class="btn-hospital-visit" data-doctor-id="${doctor.id}" data-department="${department}" data-type="offline" onclick="event.preventDefault(); event.stopPropagation(); console.log('Button clicked!'); if(window.selectDoctor) { window.selectDoctor(${doctor.id}, '${department}', 'offline'); } else { alert('Function not loaded. Please refresh.'); } return false;" style="padding: 10px 24px; background: #0097a7; color: white; border: 2px solid #0097a7; border-radius: 6px; cursor: pointer !important; font-weight: 600; font-size: 0.95rem; transition: all 0.3s; white-space: nowrap; position: relative; z-index: 100 !important; pointer-events: auto !important; user-select: none; -webkit-tap-highlight-color: transparent;">
                                            <i class="fas fa-hospital" style="margin-right: 5px; pointer-events: none;"></i> Hospital Visit
                                        </button>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        
        container.innerHTML = html;
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.visibility = 'visible';
        container.style.opacity = '1';
        
        if (countEl) {
            countEl.textContent = `(${filteredDoctors.length} doctors)`;
        }
        
        // Attach event listeners to buttons
        attachBookingButtonListeners();
        
        console.log('Doctors HTML rendered. Container children:', container.children.length);
    }
    
    // Attach event listeners to booking buttons
    function attachBookingButtonListeners() {
        // Online Consult buttons
        document.querySelectorAll('.btn-online-consult').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const doctorId = parseInt(this.getAttribute('data-doctor-id'));
                const department = this.getAttribute('data-department');
                if (typeof window.selectDoctor === 'function') {
                    window.selectDoctor(doctorId, department, 'online');
                } else {
                    alert('Booking function not available');
                }
            });
        });
        
        // Hospital Visit buttons
        document.querySelectorAll('.btn-hospital-visit').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const doctorId = parseInt(this.getAttribute('data-doctor-id'));
                const department = this.getAttribute('data-department');
                if (typeof window.selectDoctor === 'function') {
                    window.selectDoctor(doctorId, department, 'offline');
                } else {
                    alert('Booking function not available');
                }
            });
        });
    }
    
    // Try immediately and keep retrying
    let attempts = 0;
    const maxAttempts = 100;
    function tryDisplay() {
        attempts++;
        displayDoctors();
        if (attempts < maxAttempts) {
            setTimeout(tryDisplay, 100);
        } else {
            console.error('Failed to display doctors after', maxAttempts, 'attempts');
            console.error('Database status:', typeof window.doctorsDatabase);
            console.error('displayDoctorsListing status:', typeof window.displayDoctorsListing);
            console.error('Department:', department);
            console.error('Available keys:', window.doctorsDatabase ? Object.keys(window.doctorsDatabase) : 'Database not loaded');
        }
    }
    
    // Start trying after a short delay to ensure script.js has loaded
    setTimeout(tryDisplay, 200);
    
    // Also try once more after a longer delay to catch any late-loading issues
    setTimeout(() => {
        console.log('Final attempt to display doctors...');
        displayDoctors();
        // Also try using displayDoctorsListing if available
        if (typeof window.displayDoctorsListing === 'function' && window.doctorsDatabase) {
            window.displayDoctorsListing(department);
        }
    }, 1000);
    
    // Set up filter handlers
    setTimeout(function() {
        const filterInputs = document.querySelectorAll('.filter-experience, .filter-fees, .filter-language, #filter-hospital, #filter-online');
        filterInputs.forEach(input => {
            input.addEventListener('change', function() {
                if (window.currentDepartment && typeof window.displayDoctorsListing === 'function') {
                    window.displayDoctorsListing(window.currentDepartment);
                }
            });
        });
        
        const sortDropdown = document.getElementById('sort-doctors');
        if (sortDropdown) {
            sortDropdown.addEventListener('change', function() {
                if (window.currentDepartment && typeof window.displayDoctorsListing === 'function') {
                    window.displayDoctorsListing(window.currentDepartment);
                }
            });
        }
        
        const clearFilters = document.getElementById('clear-filters');
        if (clearFilters) {
            clearFilters.addEventListener('click', function(e) {
                e.preventDefault();
                filterInputs.forEach(input => {
                    if (input.type === 'checkbox') {
                        input.checked = false;
                    }
                });
                if (document.getElementById('filter-hospital')) document.getElementById('filter-hospital').checked = true;
                if (document.getElementById('filter-online')) document.getElementById('filter-online').checked = true;
                if (window.currentDepartment && typeof window.displayDoctorsListing === 'function') {
                    window.displayDoctorsListing(window.currentDepartment);
                }
            });
        }
    }, 200);
});

