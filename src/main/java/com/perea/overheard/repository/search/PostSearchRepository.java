package com.perea.overheard.repository.search;

import com.perea.overheard.domain.Post;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Post} entity.
 */
public interface PostSearchRepository extends ElasticsearchRepository<Post, Long> {
}
