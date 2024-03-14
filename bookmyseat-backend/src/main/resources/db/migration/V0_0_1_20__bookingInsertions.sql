INSERT INTO `booking` (`id`, `booking_range`, `start_date`, `end_date`, `seat_id`, `user_id`, `booking_status`, `verification_code`, `created_date`)
VALUES
(1, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 507, 1, b'1', 543208, CURRENT_TIMESTAMP),
(2, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 508, 2, b'1', 612412, CURRENT_TIMESTAMP),
(3, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 307, 3, b'1', 109867, CURRENT_TIMESTAMP),
(4, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 510, 5, b'1', 325433, CURRENT_TIMESTAMP),
(5, 'WEEKLY', CURRENT_DATE(), DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), 169, 8, b'1', 738611, CURRENT_TIMESTAMP),
(6, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 511, 7, b'1', 495249, CURRENT_TIMESTAMP),
(7, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 512, 1, b'1', 123456, CURRENT_TIMESTAMP),
(8, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 513, 2, b'1', 654321, CURRENT_TIMESTAMP),
(9, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 307, 3, b'1', 987654, CURRENT_TIMESTAMP),
(10, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 515, 5, b'1', 246135, CURRENT_TIMESTAMP),
(11, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 7 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 169, 8, b'1', 579135, CURRENT_TIMESTAMP),

(12, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 517, 7, b'1', 802464, CURRENT_TIMESTAMP),
(13, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 120, 90, b'1', 543207, CURRENT_TIMESTAMP),
(14, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 121, 91, b'1', 612411, CURRENT_TIMESTAMP), 
(15, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 122, 92, b'1', 109866, CURRENT_TIMESTAMP),
(16, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 123, 93, b'1', 325432, CURRENT_TIMESTAMP),
(18, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 124, 94, b'1', 495248, CURRENT_TIMESTAMP),
(19, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 120, 90, b'1', 123446, CURRENT_TIMESTAMP),
(20, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 121, 91, b'1', 654301, CURRENT_TIMESTAMP),
(21, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 122, 92, b'1', 987644, CURRENT_TIMESTAMP),
(22, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 123, 93, b'1', 246125, CURRENT_TIMESTAMP),
(24, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 124, 94, b'1', 802474, CURRENT_TIMESTAMP),

(25, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 179, 11, b'1', 543207, CURRENT_TIMESTAMP),
(26, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 170, 12, b'1', 612411, CURRENT_TIMESTAMP), 
(27, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 171, 13, b'1', 109866, CURRENT_TIMESTAMP),
(28, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 172, 14, b'1', 325432, CURRENT_TIMESTAMP),
(29, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 173, 15, b'1', 495248, CURRENT_TIMESTAMP),
(30, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 174, 16, b'1', 543207, CURRENT_TIMESTAMP),
(31, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 175, 17, b'1', 612411, CURRENT_TIMESTAMP), 
(32, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 176, 18, b'1', 109866, CURRENT_TIMESTAMP),
(33, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 177, 19, b'1', 325432, CURRENT_TIMESTAMP),
(34, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 178, 20, b'1', 495248, CURRENT_TIMESTAMP),

(35, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 167, 109, b'1', 543207, CURRENT_TIMESTAMP),
(36, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 166, 108, b'1', 612411, CURRENT_TIMESTAMP), 
(37, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 165, 107, b'1', 109866, CURRENT_TIMESTAMP),
(38, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 164, 106, b'1', 325432, CURRENT_TIMESTAMP),
(39, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 163, 105, b'1', 495248, CURRENT_TIMESTAMP),
(40, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 167, 109, b'1', 123446, CURRENT_TIMESTAMP),
(41, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 166, 108, b'1', 654301, CURRENT_TIMESTAMP),
(42, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 165, 107, b'1', 987644, CURRENT_TIMESTAMP),
(43, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 164, 106, b'1', 246125, CURRENT_TIMESTAMP),
(44, 'WEEKLY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(DATE_ADD(CURRENT_DATE(), INTERVAL 6 DAY), INTERVAL 1 DAY), 163, 105, b'1', 802474, CURRENT_TIMESTAMP),

(45, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 3, 21, b'1', 543207, CURRENT_TIMESTAMP),
(46, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 4, 22, b'1', 612411, CURRENT_TIMESTAMP), 
(47, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 5, 23, b'1', 109866, CURRENT_TIMESTAMP),
(48, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 6, 24, b'1', 325432, CURRENT_TIMESTAMP),
(49, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 7, 25, b'1', 495248, CURRENT_TIMESTAMP),
(50, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 8, 26, b'1', 543207, CURRENT_TIMESTAMP),
(51, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 9, 27, b'1', 612411, CURRENT_TIMESTAMP), 
(52, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 10, 28, b'1', 109866, CURRENT_TIMESTAMP),
(53, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 11, 29, b'1', 325432, CURRENT_TIMESTAMP),
(54, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 12, 30, b'1', 495248, CURRENT_TIMESTAMP),

(55, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 293, 31, b'1', 543207, CURRENT_TIMESTAMP),
(56, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 294, 32, b'1', 612411, CURRENT_TIMESTAMP), 
(57, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 295, 33, b'1', 109866, CURRENT_TIMESTAMP),
(58, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 296, 34, b'1', 325432, CURRENT_TIMESTAMP),
(59, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 297, 35, b'1', 495248, CURRENT_TIMESTAMP),
(60, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 298, 31, b'1', 543207, CURRENT_TIMESTAMP),
(61, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 299, 32, b'1', 612411, CURRENT_TIMESTAMP), 
(62, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 300, 33, b'1', 109866, CURRENT_TIMESTAMP),
(63, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 301, 34, b'1', 325432, CURRENT_TIMESTAMP),
(64, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 302, 35, b'1', 495248, CURRENT_TIMESTAMP),

(65, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 413, 40, b'1', 543207, CURRENT_TIMESTAMP),
(66, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 412, 41, b'1', 612411, CURRENT_TIMESTAMP), 
(67, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 411, 42, b'1', 109866, CURRENT_TIMESTAMP),
(68, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 410, 43, b'1', 325432, CURRENT_TIMESTAMP),
(69, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 409, 44, b'1', 495248, CURRENT_TIMESTAMP),
(70, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 388, 40, b'1', 543207, CURRENT_TIMESTAMP),
(71, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 387, 41, b'1', 612411, CURRENT_TIMESTAMP), 
(72, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 386, 42, b'1', 109866, CURRENT_TIMESTAMP),
(73, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 385, 43, b'1', 325432, CURRENT_TIMESTAMP),
(74, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 384, 44, b'1', 495248, CURRENT_TIMESTAMP),

(75, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 419, 76, b'1', 543207, CURRENT_TIMESTAMP),
(76, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 420, 77, b'1', 612411, CURRENT_TIMESTAMP), 
(77, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 421, 78, b'1', 109866, CURRENT_TIMESTAMP),
(78, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 417, 79, b'1', 325432, CURRENT_TIMESTAMP),
(79, 'DAILY', CURRENT_DATE(), CURRENT_DATE(), 418, 80, b'1', 495248, CURRENT_TIMESTAMP),
(80, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 422, 76, b'1', 543207, CURRENT_TIMESTAMP), 
(81, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 423, 77, b'1', 612411, CURRENT_TIMESTAMP), 
(82, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 424, 78, b'1', 109866, CURRENT_TIMESTAMP),
(83, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 425, 79, b'1', 325432, CURRENT_TIMESTAMP),
(84, 'DAILY', DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY), 426, 80, b'1', 495248, CURRENT_TIMESTAMP);