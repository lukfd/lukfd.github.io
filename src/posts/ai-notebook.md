---
date: "2025-10-14"
draft: false
title: "My AI Notebook"
description: "A collection of notes, code snippets, idea and projects related to the artificial intelligence world."
---

In the summer of 2025, I took the Artificial Intelligence class at the University of St. Thomas. It was for my AI master degree, and I took it immediatly after my Machine Learning class. 

# Neutral Networks
We first lookd at the basics of neural networks, understanding how they function and their applications in AI.

For example, a neural network can be used for a simple linear regresion problem. The network can be composed by a single neuron with a linear activation function. The neuron takes an input, applies a weight, and produces an output. This is the foundation of more complex networks.

```python
import tensorflow as tf
import numpy as np
from tensorflow import keras

X = np.array([-2.0, -1.0, 0.0, 1.0, 2.0, 3.0, 4.0], dtype=float)
y = np.array([-2.0, 0.0, 2.0, 4.0, 6.0, 8.0, 10.0], dtype=float)

m = tf.keras.Sequential([
    keras.layers.Dense(units=1, input_shape=[1]),
])

# How to optimize? Stochastic Gradient Descent
# What to optimize? MSE 
m.compile(optimizer='sgd', loss='mse')

m.fit(X, y, epochs=500)

m.predict(np.array([9.0]))
```

# Convolutional Neural Networks

Convolutional processes are simple moltiplications. I found a great youtube video that explains the concept of convolution in a very intuitive way: [But was is a convolution](https://youtu.be/KuXjwB4LzSA?si=fKIDHI7sukszly-J)?

Anywhooo, convolutional neural networks (CNNs) are a type of deep learning model that are particularly effective for image processing tasks. They use convolutional layers to automatically learn spatial hierarchies of features from input images.

```python
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.layers import Input, Conv2D, Dense, Flatten, Dropout
from tensorflow.keras.models import Model

(x_train, y_train), (x_test, y_test) = tf.keras.datasets.cifar10.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0
y_train, y_test = y_train.flatten(), y_test.flatten()
K = len(set(y_train.flatten()))

# Model
i = Input(shape=x_train[0].shape)
x = Conv2D(32, (3, 3), strides=2, activation='relu')(i)
x = Conv2D(64, (3, 3), strides=2, activation='relu')(x)
x = Conv2D(128, (3, 3), strides=2, activation='relu')(x)
x = Flatten()(x)
x = Dropout(0.5)(x)
x = Dense(1024, activation='relu')(x)
x = Dropout(0.2)(x)
x = Dense(K, activation='softmax')(x)
model = Model(i, x)

# Compile and fit
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)
r = model.fit(x_train, y_train, validation_data=(x_test, y_test), epochs=15)

# Plot
import matplotlib.pyplot as plt
plt.plot(r.history['accuracy'], label='acc')
plt.plot(r.history['val_accuracy'], label='val_acc')
plt.legend()
plt.show()
```

# Recurrent Neural Networks

RNN are great for time series data, aka sequential data. Time series data is like stock prices, sound, video, and text. RNNs can remember previous inputs and use them to influence the current output.

```python
from tensorflow.keras.layers import SimpleRNN

T = 10 # Time steps
x_train_rnn = x_train.reshape(-1, T, 1)
x_test_rnn = x_test.reshape(-1, T, 1)

i = Input(shape=(T, 1))
x = SimpleRNN(32, return_sequences=True)(i)
x = SimpleRNN(16)(x)
x = Dense(1)(x)
model_rnn = Model(i, x)
model_rnn.compile(
    loss='mse',
    optimizer=Adam(learning_rate=0.001),
)

r_rnn = model_rnn.fit(
    x_train_rnn, y_train,
    epochs=100,
    validation_data=(x_test_rnn, y_test),
)

show_plots(r_rnn, model_rnn, x_test_rnn, y_test, rnn=True, scaler=scaler)
```

# Other

Other important models include:
- **Transformers**: Used for natural language processing tasks, they excel at understanding context and relationships in text.
- **Generative Adversarial Networks (GANs)**: Used for generating new data samples that resemble
- autoencoders: Used for unsupervised learning tasks, they learn to compress and reconstruct data.

# Resources

## Articles

- [https://youtu.be/mPUGh0qAqWA?si=IUkmPMXOtWFVhyDu](https://youtu.be/mPUGh0qAqWA?si=IUkmPMXOtWFVhyDu)

## Ideas

- SVG and Icon generation
- Antenati: serilization of historical documents (Example [https://antenati.cultura.gov.it](https://antenati.cultura.gov.it/ark:/12657/an_ua15439223/wQo6xWY))
- Reccomendation systems: Netflix, Spotify, Amazon

## Blogs

- [The Adolescence Of Technology](https://www.darioamodei.com/essay/the-adolescence-of-technology)

## Libraries

- [TinyGrad](https://github.com/tinygrad/tinygrad)

## Examples

- [nanochat](https://github.com/karpathy/nanochat)

## Courses

- [LLM101n](https://github.com/karpathy/LLM101n)
- [cs231n](https://cs231n.stanford.edu/)

## Cloud Computing

- [Paperspace](https://www.paperspace.com/)
- [Lambda Labs](https://lambda.ai/service/gpu-cloud)

## AI Tools

- Explore repositories [DeepWiki](https://deepwiki.com/)
- Find models and libraries [HuggingFace](https://huggingface.co/)
- Find papers [Papers with Code](https://paperswithcode.com/)

## Idea

- Upload files to a vector database, train and use the nanochat LLM.