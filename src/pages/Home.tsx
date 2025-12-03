import React from 'react'
import {Link} from 'react-router-dom'
import Feature from '../components/Feature'

const Home: React.FC = () => {
	const previewFeatures = [
		{
			icon: '📚',
			title: 'Единая цифровая среда',
			description: 'Все аспекты академической жизни в одном портале - от расписания до библиотеки',
		},
		{
			icon: '👥',
			title: 'Сообщества и общение',
			description: 'Интеграция студентов и преподавателей в единое образовательное пространство',
		},
		{
			icon: '⚡',
			title: 'Цифровизация процессов',
			description: 'Снижение административной нагрузки и повышение вовлеченности студентов',
		},
	]

	return (
		<div className="page home">
			<section className="hero">
				<div className="container">
					<div className="hero-content">
						<h1>СтудентЛайф</h1>
						<p className="hero-subtitle">
							Многофункциональный портал и мобильное приложение — единая цифровая среда 
							для студентов и сотрудников университета. Цифровизация всех аспектов 
							академической жизни от записи на курсы до доступа к библиотечным ресурсам.
						</p>
						<div className="hero-stats">
							<div className="stat">
								<strong>100%</strong>
								<span>цифровизация</span>
							</div>
							<div className="stat">
								<strong>24/7</strong>
								<span>доступность</span>
							</div>
							<div className="stat">
								<strong>ВУЗы</strong>
								<span>целевая аудитория</span>
							</div>
						</div>
						<div className="hero-buttons">
							<Link to="/features" className="btn btn-primary">
								Узнать возможности
							</Link>
							<Link to="/contacts" className="btn btn-secondary">
								Связаться с нами
							</Link>
						</div>
					</div>
					<div className="hero-media">
						<div className="platform-preview">
							<div className="preview-item">📅 Расписание</div>
							<div className="preview-item">📖 Библиотека</div>
							<div className="preview-item">👨‍🏫 Преподаватели</div>
							<div className="preview-item">💬 Сообщества</div>
						</div>
					</div>
				</div>
			</section>

			<section className="target-audience">
				<div className="container">
					<h2>Целевая аудитория</h2>
					<div className="audience-grid">
						<div className="audience-card">
							<h3>Государственные университеты</h3>
							<p>Реализация по государственным тендерам с адаптацией под специфику вуза</p>
						</div>
						<div className="audience-card">
							<h3>Частные университеты</h3>
							<p>Прямые контракты с индивидуальным подходом к каждому клиенту</p>
						</div>
						<div className="audience-card">
							<h3>Стейкхолдеры</h3>
							<p>Ректорат, IT-отдел, деканаты, преподаватели и студенты</p>
						</div>
					</div>
				</div>
			</section>

			<section className="features-preview">
				<div className="container">
					<h2>Ключевые преимущества</h2>
					<div className="features-grid">
						{previewFeatures.map((feature, index) => (
							<Feature
								key={index}
								icon={feature.icon}
								title={feature.title}
								description={feature.description}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home