var mockPlants = [
    // Leafy Vegetables
     {
        name: "Talbos ng Kalabasa (Squash Leaves)",
        type: "leafy",
        description: "Talbos ng kalabasa, or squash leaves, are the tender young leaves of the squash plant. They are nutritious and commonly used in Filipino soups and stir-fries.",
        careTips: "Squash leaves can be grown in both sunny and partially shaded areas. They require regular watering and well-drained soil. Harvest the leaves when they are young and tender.",
        image: "./PLANT/Leafy/KA.jpg"
    },
    {
        name: "Kamote Tops (Sweet Potato Tops)",
        type: "leafy",
        description: "Kamote tops, or sweet potato tops, are the edible leaves and shoots of the sweet potato plant. They are rich in vitamins and minerals and commonly used in Filipino dishes.",
        careTips: "Sweet potato tops prefer warm, humid conditions and well-drained soil. They require regular watering and partial shade. Harvest the leaves and shoots when they are young for best taste and texture.",
        image: "./PLANT/Leafy/KA1.jpg"
    },
    {
        name: "Kangkong (Water Spinach)",
        type: "leafy",
        description: "Kangkong, also known as water spinach, is a leafy green vegetable that grows in water or moist soil. It is commonly used in Filipino dishes such as sinigang and adobo.",
        careTips: "Kangkong grows well in moist soil or water. It requires full sunlight and regular watering. Regular pruning helps to promote growth and prevent overcrowding.",
        image: "./PLANT/Leafy/KA11.jpg"
    },
    {
        name: "Alugbati (Malabar Spinach)",
        type: "leafy",
        description: "Alugbati, or Malabar spinach, is a leafy green vegetable with thick, succulent leaves. It is commonly used in soups and stir-fries in Filipino cuisine.",
        careTips: "Alugbati prefers warm, humid conditions and well-drained soil. It requires regular watering and partial shade. Harvest the leaves when they are young and tender.",
        image: "./PLANT/Leafy/KA111.jpg"
    },
    {
        name: "Pechay (Chinese Cabbage)",
        type: "leafy",
        description: "Pechay, also known as Chinese cabbage, is a leafy green vegetable with crunchy stalks and tender leaves. It is often used in stir-fries, soups, and salads.",
        careTips: "Pechay grows well in cool weather and well-drained soil. It requires regular watering and partial shade. Harvest the leaves when they are young and tender.",
        image: "./PLANT/Leafy/KA1111.jpg"
    },
    {
        name: "Saluyot (Jute)",
        type: "leafy",
        description: "Saluyot, also known as jute, is a leafy green vegetable with slimy texture when cooked. It is often used in Filipino soups and stews for its nutritional value.",
        careTips: "Saluyot grows well in warm weather and well-drained soil. It requires regular watering and full sunlight. Harvest the leaves when they are young for best taste and texture.",
        image: "./PLANT/Leafy/KA11111.jpg"
    },
    {
        name: "Lettuce",
        type: "leafy",
        description: "Lettuce is a leafy green vegetable often used in salads and sandwiches. It has a crisp texture and a mild, slightly sweet flavor.",
        careTips: "Lettuce plants prefer cool weather and well-drained soil. They require regular watering, especially during dry periods. Harvest the leaves when they are young for best taste and texture.",
        image: "./PLANT/Leafy/KA.webp"
    },
    {
        name: "Arugula",
        type: "leafy",
        description: "Arugula, also known as rocket, is a leafy green vegetable with a peppery flavor. It is often used in salads and pesto.",
        careTips: "Arugula plants prefer cool weather and well-drained soil. They require regular watering and partial shade. Harvest the leaves when they are young for best taste and texture.",
        image: "./PLANT/Leafy/KA2.jpg"
    },
    {
        name: "Spinach",
        type: "leafy",
        description: "Spinach is a leafy green vegetable rich in vitamins and minerals. It is commonly used in salads, soups, and smoothies.",
        careTips: "Spinach plants prefer cool weather and well-drained soil. They require regular watering and partial shade. Harvest the leaves when they are young for best taste and texture.",
        image: "./PLANT/Leafy/KA2.webp"
    },
    {
        name: "Cabbage",
        type: "leafy",
        description: "Cabbage is a leafy green or purple vegetable with dense leaves. It is commonly used in coleslaw, stir-fries, and soups.",
        careTips: "Cabbage plants prefer cool weather and well-drained soil. They require regular watering and full sunlight. Harvest the heads when they are firm and mature.",
        image: "./PLANT/Leafy/KA22.webp"
    },
    {
        name: "Mustard Greens",
        type: "leafy",
        description: "Mustard greens are leafy green vegetables with a peppery flavor. They are commonly used in salads, stir-fries, and soups.",
        careTips: "Mustard green plants prefer cool weather and well-drained soil. They require regular watering and partial shade. Harvest the leaves when they are young for best taste and texture.",
        image: "./PLANT/Leafy/KA22.jpg"
    },
    // Root Vegetables
    
    {
        name: "Singkamas (Jicama)",
        type: "root",
        description: "Singkamas, also known as jicama, is a root vegetable with a crisp, juicy texture and a slightly sweet flavor. It is often eaten raw or used in salads and spring rolls.",
        careTips: "Singkamas plants require well-drained soil and regular watering. They prefer full sunlight but can tolerate partial shade. Harvest the roots when they reach the desired size.",
        image: "./PLANT/Root/RO.jpg"
    },
    {
        name: "Labanos (Radish)",
        type: "root",
        description: "Labanos, or radish, is a root vegetable commonly used in salads, soups, and pickles. It has a crisp texture and a slightly peppery flavor.",
        careTips: "Radish plants prefer cool weather and well-drained soil. They require regular watering, but be careful not to overwater as it can cause the roots to become woody. Harvest radishes when they reach the desired size.",
        image: "./PLANT/Root/RO1.jpg"
    },
    {
        name: "Bawang (Garlic)",
        type: "root",
        description: "Bawang, or garlic, is a bulbous root vegetable known for its pungent flavor and culinary uses. It is commonly used as a seasoning in Filipino dishes.",
        careTips: "Garlic plants prefer well-drained soil and full sunlight. Plant cloves in the fall for a spring harvest. Keep the soil evenly moist, but reduce watering as the bulbs mature.",
        image: "./PLANT/Root/RO.webp"
    },
    {
        name: "Sibuyas (Onion)",
        type: "root",
        description: "Sibuyas, or onion, is a bulbous root vegetable with a pungent flavor and distinctive aroma. It is a versatile ingredient used in various Filipino dishes.",
        careTips: "Onion plants prefer well-drained soil and full sunlight. Plant sets or seeds in the fall for a spring harvest. Keep the soil evenly moist, but reduce watering as the bulbs mature.",
        image: "./PLANT/Root/RO11.jpg"
    },
    {
        name: "Kamote (Sweet Potato)",
        type: "root",
        description: "Kamote, or sweet potato, is a starchy root vegetable with a sweet flavor. It is a staple food in the Philippines and is used in a variety of dishes, both savory and sweet.",
        careTips: "Sweet potato plants prefer warm weather and well-drained soil. They require regular watering, especially during dry periods. Harvest the tubers when they reach the desired size.",
        image: "./PLANT/Root/RO111.jpeg"
    },
    {
        name: "Carrot",
        type: "root",
        description: "Carrot is a root vegetable with a sweet, crunchy texture. It is commonly used in salads, soups, and as a snack.",
        careTips: "Carrot plants prefer loose, well-drained soil. They require regular watering, especially during dry periods. Harvest carrots when they reach the desired size.",
        image: "./PLANT/Root/RO111.jpg"
    },
    {
        name: "Potato",
        type: "root",
        description: "Potato is a starchy root vegetable commonly used in various dishes such as mashed potatoes, fries, and soups.",
        careTips: "Potato plants prefer well-drained soil and full sunlight. Plant seed potatoes in the spring for a summer harvest. Keep the soil evenly moist and provide support for growing plants.",
        image: "./PLANT/Root/RO.jpeg"
    },
    {
        name: "Beetroot",
        type: "root",
        description: "Beetroot is a root vegetable with a sweet, earthy flavor. It is commonly used in salads, soups, and as a natural food coloring.",
        careTips: "Beetroot plants prefer loose, well-drained soil. They require regular watering and full sunlight. Harvest beetroot when they are young and tender.",
        image: "./PLANT/Root/RO1.jpeg"
    },
    {
        name: "Ginger",
        type: "root",
        description: "Ginger is a spicy, aromatic root used as a spice and a medicinal herb. It is commonly used in Filipino cuisine for its flavor and health benefits.",
        careTips: "Ginger plants prefer warm, humid conditions and well-drained soil. Plant ginger rhizomes in the spring for a fall harvest. Keep the soil evenly moist and provide partial shade.",
        image: "./PLANT/Root/RO1111.jpg"
    },
    {
        name: "Turmeric",
        type: "root",
        description: "Turmeric is a bright orange root with a warm, bitter flavor. It is commonly used in curries, soups, and as a natural dye.",
        careTips: "Turmeric plants prefer warm, humid conditions and well-drained soil. Plant turmeric rhizomes in the spring for a fall harvest. Keep the soil evenly moist and provide partial shade.",
        image: "./PLANT/Root/RO11111.jpg"
    },
    // Fruit Vegetables
    {
        name: "Ampalaya (Bitter Gourd)",
        type: "fruit",
        description: "Ampalaya, also known as bitter gourd, is a vine-grown vegetable that is popular for its bitter taste. It is often used in Filipino cuisine for its medicinal properties and health benefits.",
        careTips: "Ampalaya plants require full sunlight and well-drained soil. They need regular watering, but be careful not to overwater as it can lead to root rot. Trellising is recommended for support.",
        image: "./PLANT/Fruit/FR.jpg"
    },
    {
        name: "Talong (Eggplant)",
        type: "fruit",
        description: "Talong, also known as eggplant or aubergine, is a species of nightshade grown for its edible fruit. It is a popular ingredient in Filipino dishes such as tortang talong and pinakbet.",
        careTips: "Eggplant plants require full sunlight and well-drained soil. They need regular watering, especially during dry periods. Stake the plants for support as they grow.",
        image: "./PLANT/Fruit/FR.png"
    },
    {
        name: "Sili (Chili Pepper)",
        type: "fruit",
        description: "Sili, also known as chili pepper, is a spicy fruit used as a spice and a vegetable. It is commonly added to Filipino dishes to add heat and flavor.",
        careTips: "Chili plants require full sunlight and well-drained soil. They need regular watering, but be careful not to overwater as it can lead to root rot. Fertilize occasionally with a balanced fertilizer.",
        image: "./PLANT/Fruit/FR.webp"
    },
    {
        name: "Sitaw (String Beans)",
        type: "fruit",
        description: "Sitaw, or string beans, are long, slender green beans commonly used in Filipino dishes such as sinigang and pinakbet. They have a crisp texture and a sweet flavor.",
        careTips: "String bean plants require full sunlight and well-drained soil. They need regular watering, especially during dry periods. Provide support for climbing as the plants grow.",
        image: "./PLANT/Fruit/FR1.jpg"
    },
    {
        name: "Kalabasa (Squash)",
        type: "fruit",
        description: "Kalabasa, or squash, is a type of winter squash with a sweet, nutty flavor. It is used in various Filipino dishes such as ginataang kalabasa and pinakbet.",
        careTips: "Squash plants require full sunlight and well-drained soil. They need regular watering, especially during dry periods. Harvest the fruits when they are mature but still tender.",
        image: "./PLANT/Fruit/FR11.jpg"
    },
    {
        name: "Tomato",
        type: "fruit",
        description: "Tomato is a fruit commonly used as a vegetable in cooking. It is a key ingredient in many Filipino dishes such as sinigang, adobo, and spaghetti.",
        careTips: "Tomato plants prefer warm weather and well-drained soil. They require regular watering and full sunlight. Provide support for the plants as they grow.",
        image: "./PLANT/Fruit/FR.jpeg"
    },
    {
        name: "Okra",
        type: "fruit",
        description: "Okra is a tall, flowering plant known for its edible green pods. It is commonly used in soups, stews, and as a thickening agent in Filipino dishes.",
        careTips: "Okra plants prefer warm weather and well-drained soil. They require regular watering and full sunlight. Harvest okra pods when they are young and tender.",
        image: "./PLANT/Fruit/FR111.jpg"
    },
    {
        name: "Papaya",
        type: "fruit",
        description: "Papaya is a tropical fruit with sweet, orange flesh. It is commonly eaten fresh or used in salads, smoothies, and desserts.",
        careTips: "Papaya plants prefer warm, tropical climates and well-drained soil. They require regular watering and full sunlight. Harvest papayas when they are ripe but still firm.",
        image: "./PLANT/Fruit/FR1.png"
    },
    {
        name: "Cucumber",
        type: "fruit",
        description: "Cucumber is a refreshing fruit commonly eaten raw or pickled. It has a crisp texture and a mild, slightly sweet flavor.",
        careTips: "Cucumber plants prefer warm weather and well-drained soil. They require regular watering, especially during dry periods. Harvest cucumbers when they are young for best taste and texture.",
        image: "./PLANT/Fruit/FR1111.jpg"
    },
    {
        name: "Bell Pepper",
        type: "fruit",
        description: "Bell pepper is a sweet, crunchy fruit commonly used in salads, stir-fries, and as a stuffing ingredient.",
        careTips: "Bell pepper plants prefer warm weather and well-drained soil. They require regular watering and full sunlight. Harvest bell peppers when they are ripe and firm.",
        image: "./PLANT/Fruit/FR2.jpg"
    }
];


function displayVegetableList(plantType) {
    var vegetableList = document.getElementById('vegetableList');
    vegetableList.innerHTML = '';

    mockPlants.forEach(function(vegetable) {
        if (vegetable.type === plantType) {
            var vegetableCard = createVegetableCard(vegetable);
            vegetableList.appendChild(vegetableCard);
        }
    });

    // Show the vegetable list
    vegetableList.classList.remove('hidden');
}

function createVegetableCard(vegetable) {
    var vegetableCard = document.createElement('div');
    vegetableCard.className = 'vegetable-card';

    var vegetableImage = document.createElement('img');
    vegetableImage.className = 'vegetable-image';
    vegetableImage.src = vegetable.image;
    vegetableImage.alt = vegetable.name;
    // Set specific width and height for the image
    vegetableImage.style.width = '200px'; // Example width
    vegetableImage.style.height = '170px'; // Example height
    // Center the image within its container
    vegetableImage.style.display = 'block';
    vegetableImage.style.margin = 'auto';
    vegetableCard.appendChild(vegetableImage);

    var vegetableName = document.createElement('div');
    vegetableName.className = 'vegetable-name';
    vegetableName.textContent = vegetable.name;
    vegetableCard.appendChild(vegetableName);

    var vegetableDetails = document.createElement('div');
    vegetableDetails.className = 'vegetable-details hidden';
    
    var vegetableDescription = document.createElement('div');
    vegetableDescription.className = 'vegetable-description';
    vegetableDescription.textContent = vegetable.description;
    vegetableDetails.appendChild(vegetableDescription);

    var careTips = document.createElement('div');
    careTips.className = 'care-tips';
    careTips.textContent = 'Care Tips: ' + vegetable.careTips;
    vegetableDetails.appendChild(careTips);

    vegetableCard.appendChild(vegetableDetails);

    vegetableCard.addEventListener('click', function() {
        vegetableDetails.classList.toggle('hidden');
    });

    return vegetableCard;
}