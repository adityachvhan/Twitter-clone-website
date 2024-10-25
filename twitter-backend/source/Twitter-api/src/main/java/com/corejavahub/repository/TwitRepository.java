package com.corejavahub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.corejavahub.model.Twit;
import com.corejavahub.model.User;

public interface TwitRepository extends JpaRepository<Twit, Long> {

	List<Twit> findAllByIsTwitTrueOrderByCreatedAtDesc();

	List<Twit> findByRetwitUserContainsOrUser_IdAndIsTwitTrueOrderByCreatedAtDesc(User user, Long userId);

	List<Twit> findByLikesContainingOrderByCreatedAtDesc(User user);

	@Query("Select t From Twit t JOIN t.likes l where l.user.id=:userId")
	List<Twit> findByLikesUser_id(Long userId);

}
