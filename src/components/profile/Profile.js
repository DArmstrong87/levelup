import React, { useEffect, useState } from "react";
import { getProfile } from "./ProfileManager";
import "./Profile.css"

export const Profile = () => {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        getProfile()
            .then(profile => setProfile(profile))
    }, [])


    return (<>
        <article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                <header className="profile__header">
                    <h3>Your Info</h3>
                </header>
                <div className="profile__name">
                    Welcome: {profile.gamer?.user?.first_name} {profile.gamer?.user?.last_name}
                </div>
                <div className="profile__username">Username: {profile.gamer?.user?.username}</div>

                <div className="profile__bio">About you: {profile.gamer?.bio}</div>
            </section>
            <section className="profile__registrations">
                <header className="registrations__header">
                    <h3>Events you are attending</h3>
                </header>
                <div className="registrations">
                    {profile.attending?.map(event => {
                        return <section className="event-listing">
                            <div>{event.game.title}</div>
                            <div>{event.description}</div>
                            <div>{event.date}</div>
                        </section>
                    })}
                </div>
            </section>
            <section className="profile__registrations">
                <header className="registrations__header">
                    <h3>Events you are hosting</h3>
                </header>
                <div className="registrations">
                    {profile.hosting?.map(event => {
                        return <section className="event-listing">
                            <div>{event.game.title}</div>
                            <div>{event.description}</div>
                            <div>{event.date}</div>
                        </section>
                    })}
                </div>
            </section>
        </article>
    </>)
}