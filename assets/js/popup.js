function openPopup(title, date, description, url, location) {
    console.log('openPopup');
    console.log(title);
    console.log(url);
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-date').textContent = date;    
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('popup-url').href = url;
    document.getElementById('popup-location').textContent = location;
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  