let linkedin_profile = document.querySelector('#linkedin_profile');
linkedin_profile.addEventListener('mouseover', function() {
    this.style.cursor = 'pointer';
    linkedin_profile.style.color = 'blue';
    linkedin_profile.style.textDecoration = 'underline';
});
linkedin_profile.addEventListener('mouseout', function() {
    this.style.cursor = 'default';
    linkedin_profile.style.color = 'white';
    linkedin_profile.style.textDecoration = 'none';
});
linkedin_profile.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/sohan-kancherla-97821a1a1/', '_blank');
    this.style.cursor = 'default';
    linkedin_profile.style.color = 'white';
    linkedin_profile.style.textDecoration = 'none';
});

let website = document.querySelector('#website');
website.addEventListener('mouseover', function() {
    this.style.cursor = 'pointer';
    website.style.color = 'blue';
    website.style.textDecoration = 'underline';
});
website.addEventListener('mouseout', function() {
    this.style.cursor = 'default';
    website.style.color = 'white';
    website.style.textDecoration = 'none';
});
website.addEventListener('click', function() {
    window.open('https://www.sohankancherla.com/', '_blank');
    this.style.cursor = 'default';
    website.style.color = 'white';
    website.style.textDecoration = 'none';
});