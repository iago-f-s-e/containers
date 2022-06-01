
### pre-requisitos:

 - crie o arquivo **init.sql**
 - copie o copie o código abaixo e cole no arquivo

```sql
  -- você pode criar um ou mais bancos

  -- caso crie um banco após subir o container
  -- é necessário fazer um docker-compose down e um docker-compose up -d

  IF DB_ID('DATABASE_NAME') IS NULL 
  BEGIN
    CREATE DATABASE DATABASE_NAME
  END
  GO

  USE <DATABASE_NAME>; --OPCIONAL
  GO
```