BEGIN;

CREATE TABLE IF NOT EXISTS portfolio_projects (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  description text NOT NULL,
  image text NOT NULL,
  technologies text[] NOT NULL DEFAULT '{}',
  github text CHECK (github ~ '^https?://'),
  live text CHECK (live ~ '^https?://'),
  featured boolean NOT NULL DEFAULT false,
  published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 100
);

INSERT INTO portfolio_projects
  (slug, title, description, image, technologies, github, live, featured, sort_order)
VALUES
  ('e-commerce-platform', 'E-Commerce Platform', 'Full-stack e-commerce solution with React, Node.js, and Stripe integration.', '/Capture.PNG', ARRAY['React', 'Node.js', 'Stripe'], 'https://github.com/danielwubie/Alora-frontend', 'https://alora.lockitech.com/', true, 10),
  ('cafe-website', 'Café Website', 'A warm and inviting website showcasing the café’s menu and atmosphere.', '/snip.PNG', ARRAY['React', 'CSS', 'Firebase'], 'https://github.com/isle27/cafe-website', 'https://oakbrew.lockitech.com/', true, 20),
  ('event-planner-website', 'Event Planner Website', 'A sleek platform for organizing and showcasing events with ease.', '/snip2.PNG', ARRAY['React', 'MUI', 'EmailJS'], 'https://github.com/isle27/E.B-Events', 'https://ebevents.lockitech.com/', true, 30)
ON CONFLICT (slug) DO NOTHING;

COMMIT;
