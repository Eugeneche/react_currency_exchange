import React from 'react';
import './Points.css';

class Points extends React.Component {

    render() {
        return(
            <div>
                <h3>Our points to currency exchange</h3>
                <div className="flex-container">
                    <div className="block flex-item">
                        <p>
                        1919 Davis St, San Leandro, CA 94577
                        </p>
                    </div>
                    <div className="block flex-item">
                        <p>
                        501 Sereno Dr, CA 94589
                        </p>
                    </div>
                    <div className="block flex-item">
                        <p>
                        1400 Hilltop Mall Rd, CA 94806
                        </p>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="block flex-item">
                        <p>
                        2203 Loveridge Rd, CA 94565
                        </p>
                    </div>
                    <div className="block flex-item">
                        <p>
                        2700 Las Positas Rd, CA 94551
                        </p>
                    </div>
                    <div className="block flex-item">
                        <p>
                        777 Story Rd, CA 95122
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Points;