# Time Series Forecasting

## Introduction

Since ancient times people are fascinated in forecasting, sometimes being seen as a sign of divine inspiration that purport to explain aspects of a person's personality, predict significant events in their lives based on the positions of celestial objects; and sometimes being seen as an activity grounded in ancient wisdom that provides sophisticated methods for predicting climate, calculating rainfall and issuing early warnings. Many ancient cultures have attached significant importance to astronomical events and developed elaborate systems for predicting terrestrial events from celestial observations.

Around 1600 BCE a rudimentary form of astrology was practiced in the Old Babylonian period that is documented in 70 cuneiform tablets known as Enuma Anu Enlil comprising about 7000 celestial omens. These tablets reveals the behaviour of the moon first, then solar phenomena, followed by other weather activities, and finally the behaviour of various stars and planets. Tablet 14 details a basic mathematical scheme for predicting the visibility of the moon. Tablets 15 to 22 predicted lunar eclipses.  Later a range of divinatory pseudoscientific practices emerged. Around 700 BCE prophet Isaiah in Isaiah 41:23 wrote, "Tell us what the future holds, so we may know that you are gods." One hundred years later, Babylon forecasters would foretell the future based on the appearance of a sheep's liver. Around the same time, people seeking forecasts would journey to Delphi in Greece to consult the Oracle, who would provide her predictions while intoxicated by ethylene vapours. Although forecasting in India dates to hoary antiquity, with foundations in Ganita Shastra meaning the science of calculation, the Vedanga Jyotisha written by Maharishi Lagadha around 1400 BCE is the earliest known texts on astronomy and astrology that uses celestial observations for accurately calculating and fixing time for performing vedic rituals and activities that  continues to play a role in the contemporary society, ![DOI:10.15388/AOV.2003.18272](https://www.journals.vu.lt/acta-orientalia-vilnensia/article/view/18272).

The inaccuracy of forecasting is due to the incomplete information about the system under study, its complex highly uncertain operational phenomena, and the chaotic nature of the environment it operates in. It is long realized that better scientific approaches to predictions results in the more accurate forecasts. Therefore to obtain strategic advantages, modern forecasting does not simply rely on magical guessing or divinatory practices of the past but rather on the scientific techniques based on expert analysis performed using sophisticated computer models that take into account historical data along with several system factors to make informed decisions about the future events or conditions. Our  goal is to explore the most reliable methods for producing forecasts with the emphasis on methods that are reproducible and proven to work in practice.

## Types of Fprecasts

### Delphi Method

The Delphi method is a technique for eliciting such expert-judgement-based predictions in a controlled way. This type of prediction might be perceived as consistent with statistical techniques in the sense that, at minimum, the "data" being used is the predicting expert's cognitive experiences forming an intuitive "probability curve."

Forecasting usually requires time series methods, while prediction is often performed on cross-sectional data.

Statistical techniques used for prediction include regression and its various sub-categories such as linear regression, generalized linear models (logistic regression, Poisson regression, Probit regression), etc. In case of forecasting, autoregressive moving average models and vector autoregression models can be utilized. When these and/or related, generalized set of regression or machine learning methods are deployed in commercial usage, the field is known as predictive analytics.

Forecasting is the process of making predictions based on past and present data. Later these can be compared (resolved) against what happens.

Qualitative forecasting techniques are subjective, based on the opinion and judgment of consumers and experts; they are appropriate when past data are not available. They are usually applied to intermediate- or long-range decisions. Examples of qualitative forecasting methods are [citation needed] informed opinion and judgment, the Delphi method, market research, and historical life-cycle analogy.

Quantitative forecasting models are used to forecast future data as a function of past data. They are appropriate to use when past numerical data is available and when it is reasonable to assume that some of the patterns in the data are expected to continue into the future. These methods are usually applied to short- or intermediate-range decisions. Examples of quantitative forecasting methods are[citation needed] last period demand, simple and weighted N-Period moving averages, simple exponential smoothing, Poisson process model based forecasting and multiplicative seasonal index

Average approach

In this approach, the predictions of all future values are equal to the mean of the past data. This approach can be used with any sort of data where past data is available. In time series notation:

    y ^ T + h | T = y ¯ = ( y 1 + . . . + y T ) / T {\displaystyle {\hat {y}}_{T+h|T}={\bar {y}}=(y_{1}+...+y_{T})/T} [16]

where y 1 , . . . , y T {\displaystyle y_{1},...,y_{T}} is the past data.

Although the time series notation has been used here, the average approach can also be used for cross-sectional data (when we are predicting unobserved values; values that are not included in the data set). Then, the prediction for unobserved values is the average of the observed values.
Naïve approach

Naïve forecasts are the most cost-effective forecasting model, and provide a benchmark against which more sophisticated models can be compared. This forecasting method is only suitable for time series data.[16] Using the naïve approach, forecasts are produced that are equal to the last observed value. This method works quite well for economic and financial time series, which often have patterns that are difficult to reliably and accurately predict.[16] If the time series is believed to have seasonality, the seasonal naïve approach may be more appropriate where the forecasts are equal to the value from last season. In time series notation:

    y ^ T + h | T = y T {\displaystyle {\hat {y}}_{T+h|T}=y_{T}}

Drift method

A variation on the naïve method is to allow the forecasts to increase or decrease over time, where the amount of change over time (called the drift) is set to be the average change seen in the historical data. So the forecast for time T + h {\displaystyle T+h} is given by

    y ^ T + h | T = y T + h T − 1 ∑ t = 2 T ( y t − y t − 1 ) = y T + h ( y T − y 1 T − 1 ) . {\displaystyle {\hat {y}}_{T+h|T}=y_{T}+{\frac {h}{T-1}}\sum _{t=2}^{T}(y_{t}-y_{t-1})=y_{T}+h\left({\frac {y_{T}-y_{1}}{T-1}}\right).} [16]

This is equivalent to drawing a line between the first and last observation, and extrapolating it into the future.
Seasonal naïve approach

The seasonal naïve method accounts for seasonality by setting each prediction to be equal to the last observed value of the same season. For example, the prediction value for all subsequent months of April will be equal to the previous value observed for April. The forecast for time T + h {\displaystyle T+h} is[16]

    y ^ T + h | T = y T + h − m ( k + 1 ) {\displaystyle {\hat {y}}_{T+h|T}=y_{T+h-m(k+1)}}

where m {\displaystyle m}=seasonal period and k {\displaystyle k} is the smallest integer greater than ( h − 1 ) / m {\displaystyle (h-1)/m}.

The seasonal naïve method is particularly useful for data that has a very high level of seasonality.
Deterministic approach

A deterministic approach is when there is no stochastic variable involved and the forecasts depend on the selected functions and parameters.[17][18] For example, given the function

    f n ( x t ) = 1 ( 1 + x t n ) , n ∈ N , x ∈ R . {\displaystyle {\begin{aligned}f_{n}(x_{t})={\dfrac {1}{(1+x_{t}^{n})}}\,,\qquad n\in {\mathbb {N} },\;x\in {\mathbb {R} }.\end{aligned}}}


The short term behaviour x t {\displaystyle x_{t}} and the is the medium-long term trend y t {\displaystyle y_{t}} are

    { x t + 1 = α f n ( x t ) + γ y t + δ y t + 1 = β y t − μ x t + η {\displaystyle {\begin{aligned}{\left\{{\begin{array}{ll}x_{t+1}=\alpha f_{n}(x_{t})+\gamma \,y_{t}+\delta \\y_{t+1}=\beta \,y_{t}-\mu \,x_{t}+\eta \end{array}}\right.}\end{aligned}}}

where α , γ , β , μ , η {\displaystyle \alpha ,\gamma ,\beta ,\mu ,\eta } are some parameters.

This approach has been proposed to simulate bursts of seemingly stochastic activity, interrupted by quieter periods. The assumption is that the presence of a strong deterministic ingredient is hidden by noise. The deterministic approach is noteworthy as it can reveal the underlying dynamical systems structure, which can be exploited for steering the dynamics into a desired regime.[17]


Time series methods

Time series methods use historical data as the basis of estimating future outcomes. They are based on the assumption that past demand history is a good indicator of future demand.

    Moving average
    Weighted moving average
    Exponential smoothing
    Autoregressive moving average (ARMA) (forecasts depend on past values of the variable being forecast and on past prediction errors)
    Autoregressive integrated moving average (ARIMA) (ARMA on the period-to-period change in the forecast variable)

    e.g. Box–Jenkins
    Seasonal ARIMA or SARIMA or ARIMARCH,

    Extrapolation
    Linear prediction
    Trend estimation (predicting the variable as a linear or polynomial function of time)
    Growth curve (statistics)
    Recurrent neural network


Judgmental methods

Judgmental forecasting methods incorporate intuitive judgement, opinions and subjective probability estimates. Judgmental forecasting is used in cases where there is a lack of historical data or during completely new and unique market conditions.[23]

Judgmental methods include:

    Composite forecasts[citation needed]
    Cooke's method[citation needed]
    Delphi method
    Forecast by analogy
    Scenario building
    Statistical surveys
    Technology forecasting

Artificial intelligence methods

    Artificial neural networks
    Group method of data handling
    Support vector machines

Often these are done today by specialized programs loosely labeled

    Data mining
    Machine learning
    Pattern recognition

### Time-series Forecasting

Time series forecasting involves analyzing data that evolves over some period of time and then utilizing statistical models to make predictions about future patterns and trends. It takes into account the sequential nature of data where each observation is dependent on previous observations. Through the use of existing historical data, time series analysis enables the prediction of future values and trends.Time series models are statistical tools that experts use to study and predict data that changes over time. These models help us uncover patterns, trends, and relationships in the data, which in turn allows us to make informed predictions about what might happen in the future. Below is a brief overview of some commonly used time series models:

#### Moving Average (MA) Model

This model calculates the average of past observations with the aim of predicting future values. It is useful for capturing short-term fluctuations and random variations in the data.

    Assumptions: The observations are a linear combination of past error terms, and there is no autocorrelation between the error terms.
    Parameters: The order of the model (q) determines the number of lagged error terms to include.
    Strengths: MA models are effective in capturing short-term dependencies and smoothing out random fluctuations in the data.

Autoregressive (AR) Model: This model predicts future values based on a linear combination of past observations.

    Assumptions: It assumes that the future values depend on the previous values, capturing long-term trends and dependencies.
    Parameters: The order of the model (p) determines the number of lagged observations to include.
    Strengths: AR models are useful for capturing long-term dependencies and trends in the data.

Autoregressive Moving Average (ARMA) Model: The ARMA model combines the AR and MA models to capture both short-term and long-term patterns in the data. It is effective for analyzing stationary time series data.

    Assumptions: The observations are a linear combination of past observations and past error terms, and there is no autocorrelation between the error terms.
    Parameters: The orders of the AR and MA components (p and q) determine the number of lagged observations and error terms to include.
    Strengths: ARMA models combine the strengths of AR and MA models, capturing both short-term and long-term dependencies in the data.

Autoregressive Integrated Moving Average (ARIMA) Model: This model extends the ARMA model by incorporating differencing to handle non-stationary data. It is suitable for data with trends or seasonality.

    Assumptions: The data is stationary after differencing, meaning the differences between consecutive observations are stationary.
    Parameters: The orders of the AR, I, and MA components (p, d, and q) determine the number of lagged observations, differencing, and lagged error terms to include.
    Strengths: ARIMA models can handle non-stationary data by incorporating differencing, making them suitable for time series with trends or seasonality.

Seasonal ARIMA (SARIMA) Model: This model is an extension of the ARIMA model and includes seasonal components. It is useful for analyzing and forecasting data with recurring seasonal patterns.

    Assumptions: The data exhibits seasonal patterns as well as trends and dependencies.
    Parameters: The orders of the seasonal AR, I, and MA components (P, D, and Q) determine the number of lagged seasonal observations, seasonal differencing, and lagged seasonal error terms to include.
    Strengths: SARIMA models are effective for analyzing and forecasting time series data with seasonal patterns.

Exponential Smoothing Models: Exponential smoothing models, such as Simple Exponential Smoothing (SES) and Holt-Winters’ Exponential Smoothing, use weighted averages of past observations to make predictions and are effective for capturing trends and seasonality in the data.

    Assumptions: The future values are a weighted sum of past observations, with exponentially decreasing weights.
    Parameters: The smoothing factor (alpha) determines the weight given to recent observations.
    Strengths: Exponential smoothing models are simple yet effective for forecasting, providing good results for data with smooth trends and no seasonality.

Vector Autoregression (VAR) Model: This model is used when multiple time series variables interact with each other and it captures the relationships and dependencies between variables, making it suitable for macroeconomic forecasting.

    Assumptions: The time series variables are interdependent and follow a multivariate autoregressive process.
    Parameters: The orders of the VAR model (p) determine the number of lagged observations to include for each variable.
    Strengths: VAR models can capture the interdependencies between multiple time series variables, making them suitable for macroeconomic forecasting and analyzing complex systems.

Machine Learning Models: Machine learning algorithms, such as Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) networks, can also be applied to time series analysis. These models can capture complex patterns and dependencies in the data.

    Assumptions: These models can capture complex patterns and dependencies in the data without explicit assumptions about the underlying process.
    Parameters: The architecture and hyperparameters of the specific machine learning model.
    Strengths: Machine learning models can handle nonlinear relationships and capture long-term dependencies, making them suitable for complex time series analysis.

Take note that the choice of time series model will depend on the characteristics of the data you will be working with and the specific forecasting goals you have. By selecting an appropriate time series model based on your use case, you can gain insights, make accurate predictions, and make informed decisions based on the patterns observed in your data.

Selecting the appropriate Time Series Model for a dataset

Selecting the right time series model for a given dataset involves considering various factors, including the data characteristics, the presence of trends or seasonality, and the forecasting requirements. Some guidelines for model selection include:

    Begin with simple models like AR, MA, or ARMA and measure their performance. If the data shows clear patterns or dependencies, more complex models like ARIMA or SARIMA may be appropriate in that case.
    Consider Seasonality: If the data shows seasonal patterns, models like SARIMA or seasonal decomposition of time series (STL) can be effective in capturing and forecasting these patterns.
    Evaluate Performance: Use appropriate evaluation metrics and cross-validation techniques to compare the performance of different models and choose the model that provides the most accurate and reliable forecasts.
    Consider any domain-specific knowledge or insights that can guide you in choosing a suitable model. Expert knowledge can help in identifying relevant variables, incorporating external factors, or applying specific modeling techniques.


Evaluating the performance of time series models requires the use of specific metrics tailored to the characteristics of time-dependent data. Some commonly used metrics include:

    Mean Absolute Error (MAE): This metric measures the average absolute difference between the predicted and actual values. It provides a straightforward measure of the model’s accuracy.
    Root Mean Squared Error (RMSE): RMSE calculates the square root of the average squared difference between the predicted and actual values. It penalizes larger errors more heavily than MAE.
    Mean Absolute Percentage Error (MAPE): MAPE calculates the average percentage difference between the predicted and actual values. It provides a relative measure of the model’s accuracy.
    Forecast Bias: Forecast bias measures the tendency of the model to consistently overestimate or underestimate the actual values. A bias close to zero indicates a well-calibrated model.

Cross-validation techniques:

Cross-validation is a method used to evaluate how well time series models perform and how well they can be applied to new data. Since time series data has a sequential nature, traditional cross-validation techniques like k-fold cross-validation may not work effectively. Instead, the following techniques are commonly used:

    Rolling Window Cross-Validation: In this approach, a fixed-size training window is used to train the model, and a fixed-size validation window is used to evaluate its performance. The window is then rolled forward in time until all data points are evaluated.
    Walk-Forward Validation: This method is similar to rolling window cross-validation but involves using a sliding window that moves one step at a time. The model is trained on the available data up to a certain point and then tested on the next data point.