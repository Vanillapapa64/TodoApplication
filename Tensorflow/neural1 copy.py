import tensorflow as tf
import os

os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.datasets import cifar10



(x_train, y_train), (x_test, y_test) = cifar10.load_data()
x_train = x_train.astype("float32") / 255.0
x_test = x_test.astype("float32") / 255.0

# Sequential API (Very convenient, not very flexible)
inputs = keras.Input(shape=(32,32,3))
x = layers.Dense(1024, activation="relu", name="first_layer")(inputs)
x = layers.Dense(512, activation="relu", name="second_layer")(x)
x = layers.Dense(256, activation="relu", name="third_layer")(x)
outputs = layers.Dense(10, activation="softmax")(x)
model = keras.Model(inputs=inputs, outputs=outputs)


model.compile(
    loss=keras.losses.SparseCategoricalCrossentropy(from_logits=False),
    optimizer=keras.optimizers.Adagrad(learning_rate=0.0001),
    metrics=["accuracy"],
)

model.fit(x_train, y_train, batch_size=32, epochs=15, verbose=2)
model.evaluate(x_test, y_test, batch_size=32, verbose=2)