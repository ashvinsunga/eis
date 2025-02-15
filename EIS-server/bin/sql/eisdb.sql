CREATE TABLE inventory(
    id serial,
    serial_no character varying (100),
    item_description character varying(255),
    category character varying(50),
    quantity integer
);

CREATE TABLE entities(
    id serial,
    code character varying(50), 
    entity_name character varying(100)
);

CREATE TABLE category(
    id serial,
    category_name character varying(50)
);


INSERT INTO entities(code, entity_name)
VALUES
('SMP01','SM Hypermarket'), 
('PGCOMM', 'Puregold Commonwealth'),
('EC01','Ever Commonwealth');

INSERT INTO inventory(serial_no, item_description, category, quantity)
VALUES
('#0001', 'Screw', 'hardware', 1), 
('#0002', 'Shampoo', 'skincare and beauty', 20),
('#0003','Keyboard', 'gadgets', 100);

INSERT INTO category(category_name)
VALUES
('hardware'), 
('Shampoo'),
('Keyboard');