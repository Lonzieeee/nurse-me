import React from 'react';

function HomeNursing() {
  return (
    <div style={{ padding: '100px 20px 50px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#2d3748', marginBottom: '2rem', textAlign: 'center' }}>
        Home Nursing Care
      </h1>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
        padding: '40px', 
        borderRadius: '16px', 
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <img 
          src="https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/nursing-home-min.png" 
          alt="Home Nursing Care" 
          style={{ height: '120px', marginBottom: '20px' }}
        />
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#4a5568', 
          lineHeight: '1.6', 
          maxWidth: '800px', 
          margin: '0 auto' 
        }}>
          Professional nurses provide medical support, medication management, and recovery assistance in the comfort of your home.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px', 
        marginBottom: '3rem' 
      }}>
        <div style={{ 
          background: 'white', 
          padding: '30px', 
          borderRadius: '12px', 
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)' 
        }}>
          <h3 style={{ color: '#2d9cdb', marginBottom: '15px' }}>24/7 Professional Care</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Our licensed nurses are available around the clock to provide expert medical care, ensuring your health and safety at all times.
          </p>
        </div>

        <div style={{ 
          background: 'white', 
          padding: '30px', 
          borderRadius: '12px', 
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)' 
        }}>
          <h3 style={{ color: '#2d9cdb', marginBottom: '15px' }}>Medication Management</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Expert handling of medication schedules, administration, and monitoring to ensure proper treatment compliance and safety.
          </p>
        </div>

        <div style={{ 
          background: 'white', 
          padding: '30px', 
          borderRadius: '12px', 
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)' 
        }}>
          <h3 style={{ color: '#2d9cdb', marginBottom: '15px' }}>Recovery Assistance</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Comprehensive support during recovery periods, including wound care, physical therapy support, and health monitoring.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a 
          href="/services/book" 
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            background: '#2d9cdb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.background = '#1b7dbd'}
          onMouseOut={(e) => e.target.style.background = '#2d9cdb'}
        >
          Book Home Nursing Care
        </a>
      </div>
    </div>
  );
}

export default HomeNursing;
