const validationRules = {
    // "name":  /[\p{L}\p{M}]{6,}\s\p{Lu}\. \p{Lu}\./gu,
    // "group": /^([А-ЩЬЮЯҐЄІЇA-Z]{2}|[A-Z]{2})-\d{2}$/u,
    // "phone-number": /\d{3}-\d{3}-\d{2}-\d{2}/g,
    // "ID": /.{2} №\d{6}/g,
    // "faculty": /.{4}/g,
    
    name: /^[\p{L}\p{M}]{4,12} [\p{Lu}\p{Lt}]\. [\p{Lu}\p{Lt}]\.$/u,
    group:  /^[\p{L}\p{M}]{2}-\d{2}$/u,
    "phone-number":  /^\d{3}[-\s]\d{3}[-\s]\d{2}[-\s]\d{2}$/,
    ID: /^[A-Za-z]{2} №\d{6}$/,
    faculty:   /^[\p{L}]{4}$/u,
  };
  
  const isValid = (fieldId) => {
    const fieldValue = document.getElementById(fieldId).value;
    const fieldInput = document.getElementById(fieldId);
    const regex = validationRules[fieldId];
  
    if (regex.test(fieldValue)) {
      fieldInput.classList.remove("error");
      return true;
    } else {
      fieldInput.classList.add("error");
      return false;
    }
  };
  
  const validateForm = () => {
    const fields = ["name", "group", "phone-number","ID" ,"faculty"];
  
    return fields.every(isValid);
  };
  
  document.addEventListener("input", function (event) {
    const target = event.target;
    if (target.tagName === "INPUT" && target.type === "text") {
      isValid(target.id);
    }
  });
  
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    if (validateForm()) {
      displayTextInNewWindow();
    } else {
      alert("Будь ласка, заповніть форму правильно");
    }
  });
  
  const displayTextInNewWindow = () => {
    const name = document.getElementById("name").value;
    const group = document.getElementById("group").value;
    const phone = document.getElementById("phone-number").value;
    const ID = document.getElementById("ID").value;
    const faculty = document.getElementById("faculty").value;
  
    const displayText = `
            <style>
              .info_container {
                display: flex;
                justify-content: center;
              }
            </style>
            <div class="info_container"> 
              <div>
                <p><strong>ПІБ:</strong> ${name}</p>
                <p><strong>Група:</strong> ${group}</p>
                <p><strong>Телефон:</strong> ${phone}</p>
                <p><strong>ID:</strong> ${ID}</p>  
                <p><strong>Факультет:</strong> ${faculty}</p>                          
              </div>
            </div>
          `;
  
    const newWindow = window.open("", "_blank");
    newWindow.document.write(displayText);
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("tableBody");
    const colorSelect = document.getElementById("color-select");
  
    let counter = 1;
    for (let i = 1; i <= 6; i++) {
      const row = document.createElement("tr");
      for (let j = 1; j <= 6; j++) {
        const cell = document.createElement("td");
  

        if (counter === 2) {
          cell.addEventListener("mouseover", function () {
            cell.style.backgroundColor = getRandomColor();
          });
  
          cell.addEventListener("click", function () {
            const selectedColor = colorSelect.value;
            cell.style.backgroundColor = selectedColor;
          });
  
          cell.addEventListener("dblclick", function () {
            const allCells = document.querySelectorAll(".even");
  
            for (const evenCell of allCells) {
              evenCell.style.backgroundColor = colorSelect.value;
            }
          });
        }
  

        if (counter % 6 === 2) {
          cell.classList.add("even");
        }
  
        cell.textContent = counter;
        row.appendChild(cell);
        counter++;
      }
  
      tableBody.appendChild(row);
    }
  });
 

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }