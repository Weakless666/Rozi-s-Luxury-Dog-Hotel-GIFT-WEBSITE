-- Create adopt_dogs table for the adoption section
CREATE TABLE IF NOT EXISTS adopt_dogs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    breed VARCHAR(100) NOT NULL,
    age VARCHAR(50) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    size VARCHAR(20) NOT NULL,
    description TEXT NOT NULL,
    medical_info TEXT,
    personality JSONB DEFAULT '[]'::jsonb,
    images JSONB DEFAULT '[]'::jsonb,
    contact_info JSONB NOT NULL,
    date_added TIMESTAMP DEFAULT NOW(),
    adopted_date TIMESTAMP,
    is_adopted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_adopt_dogs_adopted ON adopt_dogs(is_adopted);
CREATE INDEX IF NOT EXISTS idx_adopt_dogs_date_added ON adopt_dogs(date_added DESC);
CREATE INDEX IF NOT EXISTS idx_adopt_dogs_breed ON adopt_dogs(breed);
CREATE INDEX IF NOT EXISTS idx_adopt_dogs_size ON adopt_dogs(size);
CREATE INDEX IF NOT EXISTS idx_adopt_dogs_gender ON adopt_dogs(gender);

-- Insert sample data
INSERT INTO adopt_dogs (
    name, breed, age, gender, size, description, medical_info, 
    personality, images, contact_info, is_adopted
) VALUES 
(
    'Боби',
    'Смесена порода',
    '2 години',
    'Мъжки',
    'Среден',
    'Боби е много дружелюбен и игрив кученце. Обича да играе с топка и да ходи на разходки. Перфектен за семейства с деца.',
    'Ваксиниран, стерилизиран, здрав',
    '["Дружелюбен", "Игрив", "Интелигентен", "Лоялен"]'::jsonb,
    '["/images/dog1.jpg", "/images/dog2.jpg"]'::jsonb,
    '{"phone": "+359 888 123 456", "email": "adopt@rozis-dog-hotel.com", "location": "Сапарева баня"}'::jsonb,
    false
),
(
    'Луна',
    'Лабрадор микс',
    '1 година',
    'Женски',
    'Голям',
    'Луна е много спокойна и любяща. Обича да се гушка и да играе с други кучета. Идеална за първи собственици.',
    'Ваксинирана, стерилизирана, здрав',
    '["Спокойна", "Любяща", "Търпелива", "Социална"]'::jsonb,
    '["/images/dog3.jpg", "/images/dog4.jpg"]'::jsonb,
    '{"phone": "+359 888 123 456", "email": "adopt@rozis-dog-hotel.com", "location": "Сапарева баня"}'::jsonb,
    false
),
(
    'Рекс',
    'Германска овчарка',
    '3 години',
    'Мъжки',
    'Голям',
    'Рекс е много интелигентен и лоялен. Има опит с деца и е перфектен за активни семейства. Обича дълги разходки.',
    'Ваксиниран, стерилизиран, здрав, обучен',
    '["Интелигентен", "Лоялен", "Активен", "Защитник"]'::jsonb,
    '["/images/dog5.jpg", "/images/dog6.jpg"]'::jsonb,
    '{"phone": "+359 888 123 456", "email": "adopt@rozis-dog-hotel.com", "location": "Сапарева баня"}'::jsonb,
    false
),
(
    'Мила',
    'Златен ретривър',
    '6 месеца',
    'Женски',
    'Среден',
    'Мила е малко кученце с голямо сърце. Много е любознателна и игрива. Перфектна за семейства с деца.',
    'Ваксинирана, нестерилизирана, здрав',
    '["Игрива", "Любознателна", "Дружелюбна", "Енергична"]'::jsonb,
    '["/images/dog7.jpg", "/images/dog8.jpg"]'::jsonb,
    '{"phone": "+359 888 123 456", "email": "adopt@rozis-dog-hotel.com", "location": "Сапарева баня"}'::jsonb,
    false
);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_adopt_dogs_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_adopt_dogs_updated_at
    BEFORE UPDATE ON adopt_dogs
    FOR EACH ROW
    EXECUTE FUNCTION update_adopt_dogs_updated_at();
