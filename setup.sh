#!/bin/bash

# Create root directories
mkdir -p public/images public/fonts
mkdir -p src/app
mkdir -p src/components/ui src/components/layout src/components/features
mkdir -p src/lib/hooks src/lib/api
mkdir -p src/styles
mkdir -p src/types
mkdir -p supabase/migrations supabase/functions

# --- FIX STARTS HERE ---
# Create feature-specific component directories
mkdir -p src/components/features/attendance
mkdir -p src/components/features/resources
mkdir -p src/components/features/calendar
mkdir -p src/components/features/notes
# --- FIX ENDS HERE ---

# Create placeholder files in public
touch public/favicon.ico

# Create App Router structure and files
mkdir -p src/app/\(auth\)/login
touch src/app/\(auth\)/login/page.tsx
mkdir -p src/app/\(auth\)/signup
touch src/app/\(auth\)/signup/page.tsx
mkdir -p src/app/\(dashboard\)/dashboard
touch src/app/\(dashboard\)/dashboard/page.tsx
mkdir -p src/app/\(dashboard\)/attendance
touch src/app/\(dashboard\)/attendance/page.tsx
mkdir -p src/app/\(dashboard\)/resources
touch src/app/\(dashboard\)/resources/page.tsx
mkdir -p src/app/\(dashboard\)/calendar
touch src/app/\(dashboard\)/calendar/page.tsx
mkdir -p src/app/\(dashboard\)/notes
touch src/app/\(dashboard\)/notes/page.tsx
touch src/app/layout.tsx
touch src/app/globals.css

# Create component placeholder files
touch src/components/ui/Button.tsx
touch src/components/ui/Card.tsx
touch src/components/layout/Navbar.tsx
touch src/components/layout/Sidebar.tsx
touch src/components/layout/Footer.tsx
touch src/components/features/attendance/AttendanceTracker.tsx
touch src/components/features/resources/ResourceUploader.tsx
touch src/components/features/calendar/EventCalendar.tsx
touch src/components/features/notes/NoteEditor.tsx

# Create lib placeholder files
touch src/lib/supabaseClient.ts
touch src/lib/utils.ts
touch src/lib/hooks/useUser.ts
touch src/lib/api/courses.ts
touch src/lib/api/attendance.ts
touch src/lib/api/resources.ts
touch src/lib/api/tasks.ts


# Create styles and types placeholder files
touch src/styles/globals.css
touch src/types/index.ts

# Create Supabase placeholder files
touch supabase/migrations/0001_initial_schema.sql
touch supabase/functions/.gitkeep
touch supabase/seed.sql

# Create root configuration files
touch .eslintrc.json
touch .gitignore
touch next.config.js
touch package.json
touch postcss.config.js
touch tailwind.config.ts
touch tsconfig.json

echo "CampusLMS project structure created successfully! 🚀"
