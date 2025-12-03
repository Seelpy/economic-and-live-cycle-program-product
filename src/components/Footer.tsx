import React from 'react'

const Footer: React.FC = () => (
	<footer className="footer">
		<div className="container">
			<div className="footer-content">
				<div className="footer-section">
					<h3>СтудентЛайф</h3>
					<p>Многофункциональный портал и мобильное приложение — единая цифровая среда для студентов и сотрудников университета</p>
				</div>
				<div className="footer-section">
					<h4>Контакты</h4>
					<p>Email: info@campus-tech.ru</p>
					<p>Телефон: +7 (495) 123-45-67</p>
				</div>
				<div className="footer-section">
					<h4>Компания</h4>
					<p>ООО "Кампус-Тех"</p>
				</div>
			</div>
			<div className="footer-bottom">
				<p>&copy; 2025 ООО "Кампус-Тех". Все права защищены.</p>
			</div>
		</div>
	</footer>
)

export default Footer