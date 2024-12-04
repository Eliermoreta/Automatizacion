import pandas as pd
import matplotlib.pyplot as plt

# 1. Cargar el archivo 'netflix_title.csv'
df = pd.read_csv('netflix_title.csv')

# 2. Visualizar los primeros 10 registros del conjunto de datos
print("Primeros 10 registros:")
print(df.head(10))

# 3. Visualizar los últimos 15 registros del conjunto de datos
print("\nÚltimos 15 registros:")
print(df.tail(15))

# 4. Generar los estadísticos básicos
print("\nEstadísticos básicos:")
print(df.describe(include='all'))

# 5. Completar todos los datos vacíos (na) con ceros (0)
df.fillna(0, inplace=True)

