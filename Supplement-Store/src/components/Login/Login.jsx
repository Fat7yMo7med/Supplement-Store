import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userContext } from '../../Context/UserContext';
import styles from './login.module.css';

export default function LoginPage() {
    let { isLogin, setLogin } = useContext(userContext);
    let navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(dataForm) {
        setIsLoading(true);
        try {
            let response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', dataForm);
            
            if (response.data.message === 'success') {
                localStorage.setItem('userToken', response.data.token);
                setLogin(response.data.token);
                navigate('/');
            }
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
    }
        
    let validationSchema = Yup.object({ email: Yup.string()
            .required('Email is required')
            .email('Invalid email format'),
        password: Yup.string()
            .required('Password is required')
            .matches(
                /^[A-Z][a-z0-9]{5,10}$/,
                'Password must start with an uppercase letter followed by 5 to 10 lowercase letters or digits'
            ),
    });

    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleLogin
    });

    return (
        <div className={styles.loginContainer}>
            <div className={styles.glowEffect}></div>
            <div className={styles.card}>
                <div className={styles.logoContainer}>
                    <i className={`fas fa-user-lock m-auto ${styles.logoIcon}`}></i>
                </div>

                <div className={styles.header}>
                    <h1 className={styles.title}>Welcome Back</h1>
                    <p className={styles.subtitle}>Sign in to continue to your account</p>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className={styles.formGroup}>
                        <div className={styles.inputContainer}>
                            <i className={`fas fa-envelope ${styles.icon}`}></i>
                            <input type="email" onChange={formik.handleChange} onBlur={formik.handleBlur}  className={styles.inputField} name="email" value={formik.values.email} id="email" placeholder="Email Address " required disabled={isLoading}/>
                        </div>
                        {formik.touched.email && formik.errors.email && (
                            <div className={styles.error}>
                                <i className={`fas fa-exclamation-circle ${styles.errorIcon}`}></i>
                                {formik.errors.email}
                            </div>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.inputContainer}>
                            <i className={`fas fa-lock ${styles.icon}`}></i>
                            <input type={showPassword ? "text" : "password"} onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles.inputField} name="password" value={formik.values.password} id="password" placeholder="Password " required disabled={isLoading}/>
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.togglePassword} disabled={isLoading}>
                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                        {formik.touched.password && formik.errors.password && (
                            <div className={styles.error}>
                                <i className={`fas fa-exclamation-circle ${styles.errorIcon}`}></i>
                                {formik.errors.password}
                            </div>
                        )}
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className={styles.checkboxContainer}>
                            <input type="checkbox" id="remember" className={styles.checkbox} disabled={isLoading}/>
                            <label htmlFor="remember" className={styles.checkboxLabel}>
                                Remember me
                            </label>
                        </div>
                    </div>

                    <button  className={styles.submitButton}  type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <i className={`fas fa-spinner ${styles.buttonIcon} ${styles.loading}`}></i>
                                Signing In...
                            </>
                        ) : (
                            <>
                                <i className={`fas fa-sign-in-alt ${styles.buttonIcon}`}></i>
                                Sign In
                            </>
                        )}
                    </button>
                    <div className={styles.registerLink}>
                        Don't have an account? 
                        <a href="/register">Sign up now</a>
                    </div>
                </form>
            </div>
        </div>
    );
}