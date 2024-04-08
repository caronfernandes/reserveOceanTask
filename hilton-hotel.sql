-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2024 at 10:18 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hilton-hotel`
--

-- --------------------------------------------------------

--
-- Table structure for table `amenities`
--

CREATE TABLE `amenities` (
  `AmenityId` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `amenities`
--

INSERT INTO `amenities` (`AmenityId`, `Name`, `Description`) VALUES
(1, 'TV', 'Enhance your stay with our in-room television amenities. Whether you\'re looking to catch up on the latest news, unwind with your favorite shows, or enjoy a movie night in, our televisions provide entertainment at your fingertips. Featuring a range of channels and programming options, our TVs ensure that you stay entertained and connected throughout your stay. Immerse yourself in high-quality audiovisual experiences from the comfort of your room, adding an extra dimension of relaxation to your hotel experience.'),
(2, 'WiFi', 'Stay connected effortlessly with our complimentary Wi-Fi service. Whether you\'re staying for business or leisure, our high-speed internet access ensures seamless connectivity throughout your stay. Share your experiences, connect with loved ones, or catch up on work emails from the comfort of your room. Our reliable Wi-Fi network provides fast and secure internet access, allowing you to browse, stream, and stay connected with ease. Enjoy the convenience of uninterrupted online access during your stay, making it easier to plan your itinerary, stay in touch, and make the most of your time with us.'),
(3, 'bathroom', 'Indulge in comfort and convenience with our thoughtfully appointed bathroom amenities. Step into your private oasis and rejuvenate with our well-equipped facilities. Pamper yourself with a refreshing shower or soak in the luxurious bathtub, complete with plush towels and premium toiletries. Our spacious vanity area provides ample space for your grooming needs, while the well-lit mirror ensures optimal visibility. Whether you\'re preparing for a day of exploration or winding down after a long journey, our meticulously maintained bathrooms offer a sanctuary of relaxation and rejuvenation.'),
(4, 'workspace', 'Stay productive and organized with our dedicated workspace area. Designed to meet the needs of business travelers and remote workers, our well-appointed workspace offers a comfortable and functional environment for work and study. Settle into a spacious desk equipped with ample lighting and ergonomic seating, providing a conducive atmosphere for concentration and focus. Stay connected with complimentary high-speed Wi-Fi access, allowing you to seamlessly access your emails, attend virtual meetings, or complete assignments with ease. Our workspace also features convenient power outlets and charging stations to keep your devices powered throughout the day. Whether you\'re tackling deadlines or catching up on tasks, our dedicated workspace ensures that you can work efficiently and comfortably during your stay.'),
(5, 'breakfast', 'Start your day off right with our delicious breakfast offerings. Wake up to a tempting spread of freshly prepared dishes, designed to satisfy every palate and dietary preference. From hearty hot dishes to wholesome continental options, our breakfast buffet provides a delightful array of choices to fuel your day ahead. Indulge in freshly baked pastries, seasonal fruits, and a variety of cereals and yogurts. Savor a freshly brewed cup of coffee or tea, paired perfectly with a selection of juices and beverages. Whether you prefer a leisurely meal in our dining area or the convenience of breakfast in bed, our breakfast service ensures a delightful start to your morning, setting the tone for a memorable day of exploration and adventure.'),
(6, 'minibar', 'Treat yourself to a selection of refreshments and snacks from our convenient minibar. Stocked with an assortment of beverages, snacks, and treats, our minibar offers the perfect indulgence for guests looking to unwind and relax in the comfort of their room. Choose from a variety of cold drinks, including sodas, juices, and bottled water, to quench your thirst on a hot day or after a long journey. Indulge your cravings with a tempting selection of sweet and savory snacks, ranging from chocolates and nuts to chips and crackers. Whether you\'re enjoying a late-night snack or a pre-dinner drink, our minibar ensures that you have everything you need for a delightful and satisfying stay.'),
(7, 'A/C', 'Escape the elements and maintain your ideal climate with our reliable air conditioning system. Designed to keep you cool and comfortable, our A/C units offer efficient and adjustable temperature control throughout your stay. Whether you\'re seeking refuge from the sweltering heat or creating a cozy environment on chilly days, our air conditioning ensures a pleasant and inviting atmosphere in your room. Simply adjust the thermostat to your desired temperature and enjoy personalized comfort at the touch of a button. Relax and unwind knowing that our A/C system is dedicated to providing optimal climate control, allowing you to enjoy a restful and rejuvenating stay regardless of the weather outside.'),
(8, 'laundry', 'Travel light and worry-free with our convenient laundry services. Whether you\'re on a short trip or an extended stay, our hotel offers hassle-free options to keep your wardrobe fresh and clean. Take advantage of our efficient laundry facilities, equipped with state-of-the-art machines and professional-grade detergents, to refresh your clothing and linens with ease. Choose from our convenient self-service laundry options or opt for our valet laundry service for added convenience. Simply drop off your items and let our attentive staff take care of the rest, ensuring prompt and meticulous attention to your laundry needs. Enjoy the convenience of clean clothes throughout your stay, allowing you to focus on making the most of your time with us.'),
(9, 'microwave', 'Experience added convenience and flexibility with our in-room microwave. Perfect for guests looking to enjoy quick meals or heat up leftovers, our microwave provides a convenient solution for on-the-go dining. Whether you\'re craving a late-night snack or reheating your favorite takeout, our easy-to-use microwave offers a hassle-free way to satisfy your hunger cravings. Simply pop in your food, set the timer, and enjoy hot and delicious meals from the comfort of your room. From warming up breakfast pastries to preparing simple microwaveable meals, our in-room microwave adds an extra level of convenience to your stay, ensuring that you have everything you need for a comfortable and enjoyable experience.'),
(10, 'playstation', 'Unleash your inner gamer with our in-room PlayStation entertainment system. Offering the latest gaming consoles and a wide selection of popular games, our PlayStation amenity provides endless hours of fun and excitement for guests of all ages. Immerse yourself in immersive gameplay, challenge your friends to multiplayer battles, or embark on epic gaming adventures from the comfort of your room. With high-definition graphics and realistic sound effects, our PlayStation entertainment system delivers an unparalleled gaming experience that will keep you entertained for hours on end. Whether you\'re a casual gamer or a dedicated enthusiast, our in-room PlayStation amenity promises endless entertainment and excitement during your stay.');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `BookingId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `RoomId` int(11) NOT NULL,
  `CheckinDate` date NOT NULL,
  `CheckoutDate` date NOT NULL,
  `Price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`BookingId`, `UserId`, `RoomId`, `CheckinDate`, `CheckoutDate`, `Price`) VALUES
(1, 1, 1, '2024-04-07', '2024-04-11', 500.00),
(2, 4, 2, '2024-04-07', '2024-04-07', 100.00),
(3, 5, 3, '2024-04-07', '2024-04-07', 100.00),
(4, 6, 6, '2024-04-07', '2024-04-07', 100.00),
(5, 7, 8, '2024-04-07', '2024-04-07', 100.00),
(6, 8, 9, '2024-04-07', '2024-04-07', 100.00),
(7, 9, 4, '2024-04-07', '2024-04-07', 100.00),
(8, 10, 5, '2024-04-07', '2024-04-07', 100.00),
(9, 11, 11, '2024-04-07', '2024-04-07', 200.00),
(10, 12, 7, '2024-04-07', '2024-04-07', 100.00),
(11, 13, 10, '2024-04-07', '2024-04-07', 100.00),
(12, 14, 12, '2024-04-07', '2024-04-07', 200.00),
(13, 15, 2, '2024-04-08', '2024-04-08', 100.00);

-- --------------------------------------------------------

--
-- Table structure for table `roomamenities`
--

CREATE TABLE `roomamenities` (
  `RoomId` int(11) NOT NULL,
  `AmenityId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `RoomId` int(11) NOT NULL,
  `RoomTypeId` int(11) NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`RoomId`, `RoomTypeId`, `Description`) VALUES
(1, 1, 'Standard Room 1'),
(2, 1, 'Standard Room 2'),
(3, 1, 'Standard Room 3'),
(4, 1, 'Standard Room 4'),
(5, 1, 'Standard Room 5'),
(6, 1, 'Standard Room 6'),
(7, 1, 'Standard Room 7'),
(8, 1, 'Standard Room 8'),
(9, 1, 'Standard Room 9'),
(10, 1, 'Standard Room 10'),
(11, 2, 'Deluxe Room 1'),
(12, 2, 'Deluxe Room 2'),
(13, 2, 'Deluxe Room 3'),
(14, 2, 'Deluxe Room 4'),
(15, 2, 'Deluxe Room 5'),
(16, 2, 'Deluxe Room 6'),
(17, 2, 'Deluxe Room 7'),
(18, 2, 'Deluxe Room 8'),
(19, 2, 'Deluxe Room 9'),
(20, 2, 'Deluxe Room 9'),
(21, 2, 'Deluxe Room 10');

-- --------------------------------------------------------

--
-- Table structure for table `roomtypes`
--

CREATE TABLE `roomtypes` (
  `RoomTypeId` int(11) NOT NULL,
  `TypeName` varchar(30) NOT NULL,
  `Description` text NOT NULL,
  `Price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roomtypes`
--

INSERT INTO `roomtypes` (`RoomTypeId`, `TypeName`, `Description`, `Price`) VALUES
(1, 'standard', 'Experience comfort and convenience in our Standard Rooms, designed for travelers seeking a cozy and practical stay. Relax in a comfortable bed after a day of exploring, and refresh yourself in a private bathroom equipped with essential amenities. Stay connected with complimentary Wi-Fi and unwind with your favorite shows on the television. Our Standard Rooms offer everything you need for a pleasant stay at an affordable price.', 100.00),
(2, 'deluxe', 'Indulge in luxury and sophistication with our Deluxe Rooms, offering discerning travelers a premium accommodation experience. Immerse yourself in elegant surroundings featuring spacious layouts, high-quality furnishings, and luxurious bedding. Pamper yourself in a lavish bathroom complete with a bathtub, plush towels, and upscale toiletries. Enjoy state-of-the-art entertainment options, stay productive at the well-appointed work desk, and savor delightful refreshments from the mini-bar. Our Deluxe Rooms provide an unforgettable retreat for those seeking the finest in hospitality.', 200.00);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserId`, `FirstName`, `LastName`, `Email`, `Phone`) VALUES
(1, 'David', 'Willis', 'david@gmail.com', '9898989898'),
(2, 'Mary', 'Watson', 'mary@gmail.com', '9898989844'),
(3, 'Varun', 'Kush', 'janavik@gmail.com', '9898989898'),
(4, 'Varun', 'Kush', 'janavik@gmail.com', '9898989898'),
(5, 'Shivam', 'Jadish', 'shivam@gmail.com', '9898989898'),
(6, 'Shivam', 'malik', 'shivam@gmail.com', '98989898ed'),
(7, 'rehab', 'malik', 'shivam@gmail.com', '98989898ed'),
(8, 'rohan', 'ferns', 'shivam@gmail.com', '98989898ed'),
(9, '', '', '', ''),
(10, 'myrob', 'dsouza', 'myron@gmail.com', '9888767879'),
(11, 'norah', 'johnes', 'johnes@gmail.com', '9898989898'),
(12, 'viresh', 'kund', 'viresh@gmail.com', '9898989898'),
(13, 'ishaq', 'khan', 'ishaq@gmail.com', '9898989898'),
(14, 'vijay', 'raj', 'vijay@gmail.com', '9898989898'),
(15, 'Sohail', 'Pangode', 'sohail@gmail.com', '9898989876');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amenities`
--
ALTER TABLE `amenities`
  ADD PRIMARY KEY (`AmenityId`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`BookingId`),
  ADD KEY `RoomId` (`RoomId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `roomamenities`
--
ALTER TABLE `roomamenities`
  ADD KEY `AmenityId` (`AmenityId`),
  ADD KEY `RoomId` (`RoomId`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`RoomId`),
  ADD KEY `RoomTypeId` (`RoomTypeId`);

--
-- Indexes for table `roomtypes`
--
ALTER TABLE `roomtypes`
  ADD PRIMARY KEY (`RoomTypeId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `amenities`
--
ALTER TABLE `amenities`
  MODIFY `AmenityId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `BookingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `RoomId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `roomtypes`
--
ALTER TABLE `roomtypes`
  MODIFY `RoomTypeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`RoomId`) REFERENCES `rooms` (`RoomId`),
  ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);

--
-- Constraints for table `roomamenities`
--
ALTER TABLE `roomamenities`
  ADD CONSTRAINT `roomamenities_ibfk_1` FOREIGN KEY (`AmenityId`) REFERENCES `amenities` (`AmenityId`),
  ADD CONSTRAINT `roomamenities_ibfk_2` FOREIGN KEY (`RoomId`) REFERENCES `rooms` (`RoomId`);

--
-- Constraints for table `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`RoomTypeId`) REFERENCES `roomtypes` (`RoomTypeId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
