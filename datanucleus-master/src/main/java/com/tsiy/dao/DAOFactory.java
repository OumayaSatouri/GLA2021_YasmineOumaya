package com.tsiy.dao;

import javax.jdo.JDOHelper;
import javax.jdo.PersistenceManagerFactory;

public class DAOFactory {

	static final private PersistenceManagerFactory pmf = JDOHelper
			.getPersistenceManagerFactory("FlightSharingPlatformDataBase");

	static private AircraftDAO aircraftDAO = new AircraftDAOImpl(DAOFactory.pmf);
//	aircraftDAO=DataBase.getAllAircrafts();
	static final private PassengerDAO passengerDAO = new PassengerDAOImpl(DAOFactory.pmf);
	static final private PilotDAO pilotDAO = new PilotDAOImpl(DAOFactory.pmf);
	static final private FlightDAO flightDAO = new FlightDAOImpl(DAOFactory.pmf);
	static final private BookingDAOImpl bookingDAO = new BookingDAOImpl(DAOFactory.pmf);
	public static AircraftDAO getAircraftDAO() {
		// aircraftDAO = (AircraftDAO) DataBase.getAllAircrafts();
		return DAOFactory.aircraftDAO;
	}

	public static PassengerDAO getPassengerDAO() {
		return DAOFactory.passengerDAO;
	}
	public static BookingDAO getBookingDAO() {
		return DAOFactory.bookingDAO;
	}
	public static PilotDAO getPilotDAO() {
		return DAOFactory.pilotDAO;
	}

	public static FlightDAO getFlightDAO() {
		return DAOFactory.flightDAO;
	}

}
