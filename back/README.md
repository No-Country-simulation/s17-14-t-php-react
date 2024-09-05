# Entidades y Cas para la Aplicación de Centro de Mentorias

## Entidades yampos

### 1. search
- id
- mentor id
- valuation id
- skills id

### 2. chat
- id 
- user id
- mentor id
- message

### 3. valuation 
- id	
- user id
- grade
- review

### 4. hiring
- id
- pay_id

### 5. pay
- id
- user_id
- mentor_id
- type_pay
- date_pay
- amount_pay
- state_pay

### 6. user
- id
- name
- email

### 7. featured
- id
- mentor id
- user id

### 8. skil
- id
- name

### 9. mentor
- id
- skill id
- name
- valuation
- last

## Relaciones
- **user y pay**: Un usuario puede hacer un pago. (1 a muchos)
- **user y valuation**: Un usuario puede valorar a un mentor. (1 a 1)
- **user y chat**: Un usuario puede hablar con un mentor. (1 a 1)
- **user y featured**: Un usuario puede destacar a un mentor. (1 a muchos)
- **user y hiring**: Un usuario puede comprar una mentoria. (1 a muchos)
- **mentor y skill**: Un mentor 
- **mentor y chat**
- **mentor y valuation**
- **mentor y hiring**
- **mentor y featured**
- **search y mentor**
- **search y valuation**
- **search y skill**
