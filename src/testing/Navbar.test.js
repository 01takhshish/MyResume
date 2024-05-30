import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the custom matchers
import { MemoryRouter } from 'react-router-dom';
import ResponsiveAppBar from '../components/Navbar'; // Update the import path according to your project structure

describe('ResponsiveAppBar', () => {
  it('should render the MyResume link', () => {
    render(
      <MemoryRouter>
        <ResponsiveAppBar />
      </MemoryRouter>
    );

    const userMenu = screen.getByText(/Create Your Resume/i);
    expect(userMenu).toBeInTheDocument();
  });

  it('should render the Takhshish button', () => {
    render(
      <MemoryRouter>
        <ResponsiveAppBar />
      </MemoryRouter>
    );

    const buttonElements = screen.getAllByText(/Takhshish/i);
    expect(buttonElements.length).toBeGreaterThan(0);
  });

  it('should render the About link', () => {
    render(
      <MemoryRouter>
        <ResponsiveAppBar />
      </MemoryRouter>
    );

    const aboutLinks = screen.getAllByText(/About/i);
    expect(aboutLinks.length).toBeGreaterThan(0);
  });

  it('should open the user menu when the avatar is clicked', () => {
    render(
      <MemoryRouter>
        <ResponsiveAppBar />
      </MemoryRouter>
    );

    const avatarButton = screen.getByRole('button', { name: /open settings/i });
    fireEvent.click(avatarButton);

    const userMenu = screen.getByText(/Create Your Resume/i);
    expect(userMenu).toBeInTheDocument();
  });

  it('should open the navigation menu when the menu icon is clicked', () => {
    render(
      <MemoryRouter>
        <ResponsiveAppBar />
      </MemoryRouter>
    );

    const menuButton = screen.getByLabelText(/account of current user/i);
    fireEvent.click(menuButton);

    const takhshishOptions = screen.getAllByText(/Takhshish/i);
    expect(takhshishOptions.length).toBeGreaterThan(0);
  });
});
