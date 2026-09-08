import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import clsx from 'clsx';
import { RestaurantOrderProvider } from './RestaurantOrderContext';
import { RestaurantAIAgent } from './RestaurantAIAgent';
import { useLanguage } from '../i18n/LanguageContext';
import { restaurantInfo, restaurantNav, orderLabels } from '../data/restaurant';
import { useRestaurantOrder } from './RestaurantOrderContext';

const RestaurantChrome: React.FC = () => {
  const { language } = useLanguage();
  const { itemCount, toast } = useRestaurantOrder();

  return (
    <div className="restaurant-app">
      <div className="restaurant-disclaimer">{restaurantInfo.disclaimer[language]}</div>

      <header className="restaurant-header">
        <Link to="/lab/restaurant" className="restaurant-logo">
          {restaurantInfo.name}
        </Link>
        <nav className="restaurant-nav">
          {restaurantNav.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/lab/restaurant'}
              className={({ isActive }) => clsx('restaurant-nav-link', { 'restaurant-nav-link--active': isActive })}
            >
              {link.label[language]}
              {link.path === '/lab/restaurant/order' && itemCount > 0 && (
                <span key={itemCount} className="restaurant-nav-badge">
                  {itemCount}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      {toast && (
        <div key={toast.id} className="rest-toast">
          <span className="rest-toast-check" aria-hidden="true">
            ✓
          </span>
          {toast.name} {orderLabels.addedSuffix[language]}
        </div>
      )}

      <RestaurantAIAgent />
    </div>
  );
};

export const RestaurantLayout: React.FC = () => (
  <RestaurantOrderProvider>
    <RestaurantChrome />
  </RestaurantOrderProvider>
);
